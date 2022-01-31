import Tabela from '../components/Tabela';
import Layout from '../components/templates/Layout';

export default function Home() {
  return (
    <div className={``}>
      <Layout titulo="Página CRUD" subtitulo="Estamos construindo um CRUD">
        <h1>Cadastro de Clientes</h1>
        <Tabela />
      </Layout>
    </div>
  );
}
