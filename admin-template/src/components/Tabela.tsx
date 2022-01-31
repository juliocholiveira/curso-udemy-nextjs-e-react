import Cliente from '../core/Cliente';

interface TabelaProps {
  clientes?: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  const clientes = [
    new Cliente('Júlio', 40, '1'),
    new Cliente('Janaina', 37, '2'),
    new Cliente('Miguel', 8, '3'),
    new Cliente('Otávio', 5, '4'),
  ];

  const renderizarCabecalho = () => (
    <tr>
      <th className="text-left p-3">Id</th>
      <th className="text-left p-3">Nome</th>
      <th className="text-left p-3">Idade</th>
    </tr>
  );

  const renderizarDados = () =>
    clientes?.map((cliente, i) => {
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
        </tr>
      );
    });

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
