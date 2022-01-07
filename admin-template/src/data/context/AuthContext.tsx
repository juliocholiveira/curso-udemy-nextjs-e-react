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
  const [usuario, setUsuario] = useState(null);

  //TODO Função que converte objeto do firebase para o Usuario

  const loginGoogle = async () => {
    console.log('login google...');
    route.push('/');
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
