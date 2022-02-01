import Tabela from '../components/Tabela';
import Layout from '../components/templates/Layout';
import Botao from '../components/templates/Botao';
import Cliente from '../core/Cliente';

export default function Home() {
  const clientes = [
    new Cliente('Júlio', 40, '1'),
    new Cliente('Janaina', 37, '2'),
    new Cliente('Miguel', 8, '3'),
    new Cliente('Otávio', 5, '4'),
  ];

  const clienteSelecionado = (cliente: Cliente) => {
    alert(`Alterando... ${cliente.nome}`);
  };

  const clienteExcluido = (cliente: Cliente) => {
    alert(`Exclindo... ${cliente.nome}`);
  };

  return (
    <div className={``}>
      <Layout titulo="Página CRUD" subtitulo="Estamos construindo um CRUD">
        <h1>Cadastro de Clientes</h1>
        <div className="flex justify-end">
          <Botao className="mb-2" cor="green">
            Novo Cliente
          </Botao>
        </div>

        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
}
