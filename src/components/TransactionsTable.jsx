const TransactionsTable = ({ transactions }) => {
  if (!transactions || transactions.length === 0) return null;

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-2 py-1">Date</th>
          <th className="border px-2 py-1">Description</th>
          <th className="border px-2 py-1">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx, idx) => (
          <tr key={idx} className="text-center">
            <td className="border px-2 py-1">{tx.date}</td>
            <td className="border px-2 py-1">{tx.description}</td>
            <td className="border px-2 py-1">{tx.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;