import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './templates/Botao';
import Entrada from './templates/Entrada';

interface FormularioProps {
  cliente: Cliente;
  alterado?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
      {id ? <Entrada texto="id" tipo="text" valor={id} /> : false}

      <Entrada
        texto="Nome"
        tipo="text"
        valor={nome}
        valorMudou={setNome}
        className="mt-4"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
        className="mt-4"
      />
      <div className="flex justify-end mt-4">
        <Botao
          cor="green"
          className="mr-4"
          onClick={() => props.alterado?.(new Cliente(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
