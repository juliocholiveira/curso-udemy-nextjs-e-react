import route from 'next/router';
import { createContext, useState } from 'react';
import Usuario from '../../model/Usuario';
import firebase from '../../services/firebase';

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<Usuario>(null);

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

  const loginGoogle = async () => {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (resp.user?.email) {
      const usuario = usuarioNormalizado(resp.user);
      setUsuario(usuario);
      route.push('/');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
