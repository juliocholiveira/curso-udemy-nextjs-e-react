import { useEffect, useState } from 'react';
import Cliente from '.';
import useFormTable from '../../hooks/useFormTable';
import ClienteColecao from './ClienteColecao';

export default function useCliente() {
  const repo = new ClienteColecao();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const { exibirFormulario, exibirTabela, visaoTabela } = useFormTable();

  const obterTodos = () => {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  };

  const abrirFormulario = (cliente: Cliente) => {
    setCliente(cliente);
    exibirFormulario();
  };

  const excluirCliente = async (cliente: Cliente) => {
    await repo.excluir(cliente);
    await obterTodos();
  };

  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente);
    await obterTodos();
  };

  useEffect(obterTodos, []);

  return {
    cliente,
    clientes,
    obterTodos,
    abrirFormulario,
    excluirCliente,
    salvarCliente,
    exibirFormulario,
    exibirTabela,
    visaoTabela,
  };
}
