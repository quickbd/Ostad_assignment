import { useState } from "react";

function IncomeForm(props) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add logic to save the income transaction to a data store.
    console.log("Income:", amount, description);
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.title}</h1>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          className="input input-bordered input-primary w-full max-w-xs"
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          className="input input-bordered input-primary w-full max-w-xs"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Income
      </button>
    </form>
  );
}

export default IncomeForm;
