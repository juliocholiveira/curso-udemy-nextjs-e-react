import { createContext, useState } from 'react';

type Tema = 'dark' | '';

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContex = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [tema, setTema] = useState<Tema>('');

  const alternarTema = () => {
    setTema(tema == 'dark' ? '' : 'dark');
  };
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
