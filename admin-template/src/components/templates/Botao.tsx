interface BotaoProps {
  children: any;
  cor?: 'purple' | 'green' | 'gray';
  className?: string;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'gray';
  return (
    <button
      className={`
        bg-gradient-to-r from-${cor}-500 to-${cor}-600
        text-gray-100 rounded-md px-4 py-2
        ${props.className}
  `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
