import Cliente from '../core/Cliente';
import { IconEdit, IconDelete } from '../components/icons';

interface TabelaProps {
  clientes?: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const renderizarCabecalho = () => (
    <tr>
      <th className="text-left p-3">Id</th>
      <th className="text-left p-3">Nome</th>
      <th className="text-left p-3">Idade</th>
      <th className="p-3">Ações</th>
    </tr>
  );

  const renderizarDados = () =>
    props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`
          ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        `}
        >
          <td className="text-left p-3">{cliente.id}</td>
          <td className="text-left p-3">{cliente.nome}</td>
          <td className="text-left p-3">{cliente.idade}</td>
          {renderizarAcoes(cliente)}
        </tr>
      );
    });

  const renderizarAcoes = (cliente: Cliente) => {
    return (
      <td className="flex justify-center">
        <button
          onClick={() => props.clienteSelecionado?.(cliente)}
          className={`
          flex justify-center items-center
          text-green-600 p-2 rounded-full m-1
          hover:bg-purple-50
        `}
        >
          {IconEdit}
        </button>
        <button
          onClick={() => props.clienteExcluido?.(cliente)}
          className={`
          flex justify-center items-center
          text-red-600 p-2 rounded-full m-1
          hover:bg-purple-50
        `}
        >
          {IconDelete}
        </button>
      </td>
    );
  };

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
