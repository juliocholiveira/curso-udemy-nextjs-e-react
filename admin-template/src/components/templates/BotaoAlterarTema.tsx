import { IconMoon, IconSun } from '../icons';

interface BotaoAlterarTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlterarTema(props: BotaoAlterarTemaProps) {
  return (
    <div className={`cursor-pointer`} onClick={props.alternarTema}>
      {props.tema === 'dark' ? (
        <div
          className={`
            hidden sm:flex items-center
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
          `}
        >
          <div
            className={`
              flex items-center justify-center
              bg-white text-yellow-500
              w-6 h-6 rounded-full
            `}
          >
            {IconSun(4)}
          </div>
          <div
            className={`
              hidden lg:flex items-center ml-4
              text-white text-sm
          `}
          >
            <span>Claro</span>
          </div>
        </div>
      ) : (
        <div
          className={`
            hidden sm:flex items-center
            bg-gradient-to-r from-gray-600 to-gray-800
            w-14 lg:w-24 h-8 p-1 rounded-full
          `}
        >
          <div
            className={`
              flex items-center justify-center
              bg-gray-800 text-gray-300
              w-6 h-6 rounded-full
            `}
          >
            {IconMoon(4)}
          </div>
          <div
            className={`
              hidden lg:flex items-center ml-2
              text-gray-300 text-sm
          `}
          >
            <span>Escuro</span>
          </div>
        </div>
      )}
    </div>
  );
}
