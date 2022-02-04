import useApp from '../../core/App/useApp';
import Avatar from './Avatar';
import BotaoAlterarTema from './BotaoAlterarTema';
import Titulo from './Titulo';

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alternarTema } = useApp();
  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end items-center`}>
        <BotaoAlterarTema tema={tema} alternarTema={alternarTema} />
        <Avatar />
      </div>
    </div>
  );
}
