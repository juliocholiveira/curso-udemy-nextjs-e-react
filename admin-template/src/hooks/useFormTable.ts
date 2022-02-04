import { useState } from 'react';

type VisaoType = 'tabela' | 'formulario';

export default function useFormTable() {
  const [visao, setVisao] = useState<VisaoType>('tabela');

  const exibirFormulario = () => {
    setVisao('formulario');
  };

  const exibirTabela = () => {
    setVisao('tabela');
  };

  const visaoTabela = visao === 'tabela';

  return {
    exibirFormulario,
    exibirTabela,
    visaoTabela,
  };
}
