interface AuthInputProps {
  label: string;
  tipo?: 'text' | 'numeric' | 'password';
  valor: any;
  obrigatorio: boolean;
  visivel: boolean;
  onChangeMe: (e: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.visivel ? (
    <div className="flex flex-col mt-2">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.tipo || 'text'}
        value={props.valor}
        onChange={(e) => props.onChangeMe(e.target.value)}
        required={props.obrigatorio}
        className={`
          bg-gray-200 w-full px-2 py-2 rounded-lg mt-2 border 
          focus:bg-white focus:outline-none focus:border-blue-500
        `}
      />
    </div>
  ) : (
    <div></div>
  );
}
