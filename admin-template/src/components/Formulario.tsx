import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './templates/Botao';
import Entrada from './templates/Entrada';

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
      {id ? <Entrada texto="id" tipo="number" valor={id} /> : false}

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
        <Botao cor="green" className="mr-4">
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao>Cancelar</Botao>
      </div>
    </div>
  );
}
