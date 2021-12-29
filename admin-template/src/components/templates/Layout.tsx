import useAppData from '../../data/hook/useAppData';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import MenuLateral from './MenuLateral';

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();

  return (
    <div className={`${tema} flex h-screen w-screen`}>
      <MenuLateral />
      <div className={`flex flex-col bg-gray-400 dark:bg-gray-800 p-5 w-full`}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
