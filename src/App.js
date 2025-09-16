import { useState } from "react";
import UploadForm from "./components/UploadForm";
import TransactionsTable from "./components/TransactionsTable";
import SummaryCard from "./components/SummaryCard";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [analysis, setAnalysis] = useState("");

  const handleAnalysis = (data) => {
    setTransactions(data.transactions || []);
    setAnalysis(data.analysis || "");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Personal Finance Copilot</h1>
      <UploadForm onAnalysis={handleAnalysis} />
      <TransactionsTable transactions={transactions} />
      <SummaryCard analysis={analysis} />
    </div>
  );
};

export default App;