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

  const renderizarCabecalho = (
    <th>
      <td>Id</td>
      <td>Nome</td>
      <td>Idade</td>
    </th>
  );

  const renderizarDados = clientes?.map((cliente, id) => {
    return (
      <tr key={cliente.id}>
        <td>{cliente.id}</td>
        <td>{cliente.nome}</td>
        <td>{cliente.idade}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>{renderizarCabecalho}</thead>
      <tbody>{renderizarDados}</tbody>
    </table>
  );
}
