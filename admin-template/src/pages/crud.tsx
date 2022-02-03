import Tabela from '../components/Tabela';
import Layout from '../components/templates/Layout';
import Botao from '../components/templates/Botao';
import Cliente from '../core/Cliente';
import Formulario from '../components/Formulario';
import { useState } from 'react';

type VisaoType = 'tabela' | 'formulario';

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visao, setVisao] = useState<VisaoType>('tabela');
  const clientes = [
    new Cliente('Júlio', 40, '1'),
    new Cliente('Janaina', 37, '2'),
    new Cliente('Miguel', 8, '3'),
    new Cliente('Otávio', 5, '4'),
  ];

  const clienteNovo = () => {
    setCliente(Cliente.vazio());
    setVisao('formulario');
  };

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente);
    setVisao('formulario');
  };

  const clienteExcluido = (cliente: Cliente) => {
    alert(`Exclindo... ${cliente.nome}`);
  };

  const clienteAlterado = (cliente: Cliente) => {
    console.log(cliente);
    setVisao('tabela');
  };

  return (
    <div className={``}>
      <Layout titulo="Página CRUD" subtitulo="Estamos construindo um CRUD">
        <h1>Cadastro de Clientes</h1>
        <div className="flex justify-end">
          <Botao className="mb-2" cor="green" onClick={clienteNovo}>
            Novo Cliente
          </Botao>
        </div>

        {visao === 'tabela' ? (
          <Tabela
            clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() => setVisao('tabela')}
            alterado={clienteAlterado}
          />
        )}
      </Layout>
    </div>
  );
}
