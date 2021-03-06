import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconWarn } from '../components/icons';
import useAuth from '../core/Auth/useAuth';

type TipoLogin = 'EmailSenha' | 'Google';

export default function Authentication() {
  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<'cadastro' | 'login'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { signUp, login, loginGoogle } = useAuth();

  const submeter = async (tipo: TipoLogin) => {
    try {
      if (modo === 'login') {
        if (tipo === 'EmailSenha') {
          await login(email, senha);
        } else {
          await loginGoogle();
        }
      } else {
        await signUp(email, senha);
      }
    } catch (e) {
      exibirErro(e?.message || 'Erro desconhecido!', 5);
    }
  };

  const alteraModo = () => {
    setModo(modo === 'login' ? 'cadastro' : 'login');
  };

  const exibirErro = (msg, tempoEmSegundos = 5) => {
    setErro(msg);
    setTimeout(() => {
      setErro(null);
    }, tempoEmSegundos * 1000);
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
      <div className="w-full m-4 p-6 md:w-1/2 lg:w-1/3 ">
        <h1 className={`text-xl font-bold mb-5`}>
          {modo === 'login'
            ? 'Entre com sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        {erro ? (
          <div className="flex items-center bg-red-400 my-2 p-2 rounded-lg border border-red-500 text-white">
            {IconWarn()}
            <span className="ml-2">{erro}</span>
          </div>
        ) : (
          false
        )}
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
          onClick={() => submeter('EmailSenha')}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
            px-4 py-3 mt-6

        `}
        >
          {modo === 'login' ? 'Login' : 'Cadastrar'}
        </button>
        <hr className="my-6" />
        <button
          onClick={() => submeter('Google')}
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
