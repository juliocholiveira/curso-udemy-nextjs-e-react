import styles from './Subdivisao.module.css';

const Subdivisao = (props) => {
  return(
    <div
      style={{
        backgroundColor: props.preta ? "#000" : "#fff"
      }} 
      className={styles.subdivisao} />
  );
}

export default Subdivisao;