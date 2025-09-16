const SummaryCard = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="border p-4 rounded shadow my-4 bg-white max-w-xl">
      <h2 className="text-xl font-bold mb-2">AI Analysis</h2>
      <pre className="whitespace-pre-wrap">{analysis}</pre>
    </div>
  );
}

export default SummaryCard;