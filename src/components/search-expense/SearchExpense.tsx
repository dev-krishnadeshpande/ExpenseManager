import ExpenseTable from "../expense-list/ExpenseTable";
import { useExpenses } from "../../custom-hooks/useExpenses";

const SearchExpense = () => {
  const expenses = useExpenses();

  return <ExpenseTable expenses={expenses} />;
};

export default SearchExpense;
