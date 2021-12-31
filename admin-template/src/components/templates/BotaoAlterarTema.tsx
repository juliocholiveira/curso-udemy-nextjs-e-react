import { IconMoon, IconSun } from '../icons';

interface BotaoAlterarTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlterarTema(props: BotaoAlterarTemaProps) {
  return (
    <div
      className={`flex flex-row cursor-pointer`}
      onClick={props.alternarTema}
    >
      {props.tema === 'dark' ? (
        <div className={`flex flex-row`}>
          <div className={``}>{IconSun}</div>
          <div className={``}>
            <span>Claro</span>
          </div>
        </div>
      ) : (
        <div className={`flex flex-row`}>
          <div className={``}>{IconMoon}</div>
          <div className={``}>
            <span>Escuro</span>
          </div>
        </div>
      )}
    </div>
  );
}
