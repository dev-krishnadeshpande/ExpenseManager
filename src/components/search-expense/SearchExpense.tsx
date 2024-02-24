import ExpenseTable from "../expense-list/ExpenseTable";
import { useExpenses } from "../../custom-hooks/useExpenses";

const SearchExpense = () => {
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

export default SearchExpense;
