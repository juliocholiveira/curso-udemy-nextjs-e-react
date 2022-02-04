import Image from 'next/image';
import router from 'next/router';
import Head from 'next/head';
import loading from '../../../public/loading.gif';
import useAuth from '../../core/Auth/useAuth';

export default function ForcarAutenticacao(props) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                          window.location.href = "/authentication"
                        }
                      `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} alt="Loading" />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push('/authentication');
    return null;
  }
}
