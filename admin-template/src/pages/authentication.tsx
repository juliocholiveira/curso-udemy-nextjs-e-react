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

  const alteraModo = () => {
    setModo(modo === 'login' ? 'cadastro' : 'login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src={'https://source.unsplash.com/random'}
          alt="Imagem de autenticação"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full m-4 md:w-1/2 lg:w-1/3 ">
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
        <p className="mt-2">
          {modo === 'login' ? 'Novo por aqui?' : 'Já tem conta?'}
          <a
            onClick={alteraModo}
            className="ml-1 cursor-pointer text-blue-400 hover:text-blue-600 font-semibold"
          >
            {modo === 'login'
              ? 'Clique para se cadastrar.'
              : 'Clique para fazer login.'}
          </a>
        </p>
      </div>
    </div>
  );
}
