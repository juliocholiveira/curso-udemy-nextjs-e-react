import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import Usuario from '../../model/Usuario';
import firebase from '../../services/firebase';
import Cookies from 'js-cookie';

interface AuthContextProps {
  usuario?: Usuario;
  carregando?: boolean;
  signUp?: (email: string, senha: string) => Promise<void>;
  login?: (email: string, senha: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<Usuario>(null);
  const [carregando, setCarregando] = useState(true);

  const usuarioNormalizado = async (usuarioFirebase: firebase.User) => {
    const token = await usuarioFirebase.getIdToken();
    return {
      uid: usuarioFirebase.uid,
      nome: usuarioFirebase.displayName,
      email: usuarioFirebase.email,
      token,
      provedor: usuarioFirebase.providerData[0].providerId,
      imagemUrl: usuarioFirebase.photoURL,
    };
  };

  const signUp = async (email, senha) => {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  };

  const login = async (email, senha) => {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  };

  const loginGoogle = async () => {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  };

  const logout = async () => {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  };

  const gerenciarCookie = (logado: boolean) => {
    if (logado) {
      Cookies.set('admin-template-cod3r-auth', logado, {
        expires: 7,
      });
    } else {
      Cookies.remove('admin-template-cod3r-auth');
    }
  };

  const configurarSessao = async (usuarioFirebase: firebase.User) => {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  };

  // listen for Firebase state change
  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const unsubscribe = firebase.auth().onAuthStateChanged(configurarSessao);
      return () => unsubscribe();
    } else {
      setCarregando(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        signUp,
        login,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
