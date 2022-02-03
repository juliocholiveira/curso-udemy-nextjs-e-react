import Tabela from '../components/Tabela';
import Layout from '../components/templates/Layout';
import Botao from '../components/templates/Botao';
import Cliente from '../core/Cliente';
import Formulario from '../components/Formulario';
import { useEffect, useState } from 'react';
import ClienteColecao from '../core/ClienteColecao';

type VisaoType = 'tabela' | 'formulario';

export default function Home() {
  const repo = new ClienteColecao();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visao, setVisao] = useState<VisaoType>('tabela');

  const obterTodos = () => {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisao('tabela');
    });
  };

  const clienteNovo = () => {
    setCliente(Cliente.vazio());
    setVisao('formulario');
  };

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente);
    setVisao('formulario');
  };

  const clienteExcluido = (cliente: Cliente) => {
    repo.excluir(cliente);
    obterTodos();
  };

  const clienteAlterado = (cliente: Cliente) => {
    repo.salvar(cliente);
    obterTodos();
  };

  useEffect(obterTodos, []);

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
