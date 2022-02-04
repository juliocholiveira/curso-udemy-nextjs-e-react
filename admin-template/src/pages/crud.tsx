import Tabela from '../components/Tabela';
import Layout from '../components/templates/Layout';
import Botao from '../components/templates/Botao';
import Formulario from '../components/Formulario';
import useCliente from '../core/Cliente/useCliente';
import Cliente from '../core/Cliente';

export default function Home() {
  const {
    cliente,
    clientes,
    obterTodos,
    abrirFormulario,
    excluirCliente,
    salvarCliente,
    exibirFormulario,
    exibirTabela,
    visaoTabela,
  } = useCliente();

  return (
    <div className={``}>
      <Layout titulo="Página CRUD" subtitulo="Estamos construindo um CRUD">
        <h1>Cadastro de Clientes</h1>
        <div className="flex justify-end">
          <Botao
            className="mb-2"
            cor="green"
            onClick={() => abrirFormulario(Cliente.vazio())}
          >
            Novo Cliente
          </Botao>
        </div>

        {visaoTabela ? (
          <Tabela
            clientes={clientes}
            clienteSelecionado={abrirFormulario}
            clienteExcluido={excluirCliente}
          />
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() => exibirTabela()}
            alterado={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
