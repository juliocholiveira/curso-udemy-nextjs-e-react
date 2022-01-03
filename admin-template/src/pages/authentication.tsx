import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

export default function Authentication() {
  const [modo, setModo] = useState<'cadastro' | 'login'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div>
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
    </div>
  );
}
