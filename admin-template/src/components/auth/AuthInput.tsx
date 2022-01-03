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
    <div>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.tipo || 'text'}
        value={props.valor}
        onChange={(e) => props.onChangeMe(e.target.value)}
        required={props.obrigatorio}
      />
    </div>
  ) : (
    <div></div>
  );
}
