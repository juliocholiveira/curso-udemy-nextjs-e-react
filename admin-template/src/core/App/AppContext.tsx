import { createContext, useEffect, useState } from 'react';

type Tema = 'dark' | '';

interface AppContextProps {
  tema?: string;
  alternarTema?: () => void;
}

const AppContex = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [tema, setTema] = useState('');

  const alternarTema = () => {
    const novoTema = tema == 'dark' ? '' : 'dark';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
  };

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    setTema(temaSalvo);
  }, []);

  return (
    <AppContex.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContex.Provider>
  );
}

export default AppContex;
