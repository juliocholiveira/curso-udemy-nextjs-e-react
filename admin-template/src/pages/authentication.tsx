import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

export default function Authentication() {
  const [modo, setModo] = useState<'cadastro' | 'login'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const submeter = () => {
    if (modo === 'login') console.log('login');
    else console.log('cadastrar');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/3">
        <h1 className={`text-xl font-bold mb-5`}>
          {modo === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        <AuthInput
          label="Email"
          valor={email}
          obrigatorio={true}
          visivel={true}
          onChangeMe={setEmail}
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          obrigatorio={true}
          visivel={true}
          onChangeMe={setSenha}
        />
        <button
          onClick={submeter}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
            px-4 py-3 mt-6 

        `}
        >
          {modo === 'login' ? 'Login' : 'Cadastrar'}
        </button>
        <hr className="my-6" />
        <button
          onClick={submeter}
          className={`
            w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
            px-4 py-3

        `}
        >
          Login com o Google
        </button>
      </div>
    </div>
  );
}
