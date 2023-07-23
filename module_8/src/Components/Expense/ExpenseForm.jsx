import { useState } from "react";

function ExpenseForm({ title }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add logic to save the expense transaction to a data store.
    console.log("Expense:", amount, description);
    setAmount("");
    setDescription("");
  };

  return (
    <div className="blockContainer">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount: </label>
          <input
            className="input input-bordered input-primary w-full max-w-xs"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            className="input input-bordered input-primary w-full max-w-xs"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
