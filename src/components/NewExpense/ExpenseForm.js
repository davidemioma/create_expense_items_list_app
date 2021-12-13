import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  //If you want to use one state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: e.target.value,
  //   });

  //   //But if your state depends on previous state
  //   setUserInput((previousState) => {
  //     return { ...previousState, enteredTitle: e.target.value };
  //   });
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: e.target.value,
  //   });

  //   //But if your state depends on previous state
  //   setUserInput((previousState) => {
  //     return { ...previousState, enteredAmount: e.target.value };
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: e.target.value,
  //   });

  //   //But if your state depends on previous state
  //   setUserInput((previousState) => {
  //     return { ...previousState, enteredDate: e.target.value };
  //   });
  // };

  //If you want to use multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSavedExpenseData(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
