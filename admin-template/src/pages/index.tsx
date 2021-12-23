import Layout from "../components/templates/Layout";

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-green-500 to-blue-500`}>
      <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template">
        <h1>Conteúdo!!!</h1>
      </Layout>
    </div>
  )
}
