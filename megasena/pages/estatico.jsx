export const getStaticProps = () => {
  return { props : {
      numero: Math.random()
    }
  }
}

const Estatico = (props) => {
  return(
    <div>Número : {props.numero}</div>
  );
}

export default Estatico;