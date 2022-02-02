interface EntradaProps {
  texto: string;
  tipo: 'text' | 'number' | 'password';
  valor: any;
  valorMudou?: (valor: any) => void;
  className?: string;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-1">{props.texto}</label>
      <input
        className="px-4 py-2 rounded-lg dark:bg-gray-600"
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
}
