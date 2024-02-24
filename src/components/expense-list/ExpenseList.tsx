import ExpenseTable from "./ExpenseTable";
import { useExpenses } from "../../custom-hooks/useExpenses";

const ExpenseList = () => {
  const { expenses, isLoading, errorMsg } = useExpenses();

  if (isLoading) return <h2>Loading...</h2>;

  if (errorMsg) return <p className="error-msg">{errorMsg}</p>;

  return (
    <ExpenseTable
      expenses={expenses}
      errorMsg={errorMsg}
      isLoading={isLoading}
    />
  );
};

export default ExpenseList;
