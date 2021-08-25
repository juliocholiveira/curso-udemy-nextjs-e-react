import styles from './Linha.module.css';
import Subdivisao from "../Subdivisao"

const Linha = (props) => {
  return (
    <div className={styles.linha}>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
      <Subdivisao preta={props.preta}/>
      <Subdivisao preta={!props.preta}/>
    </div>
  );
}

export default Linha;