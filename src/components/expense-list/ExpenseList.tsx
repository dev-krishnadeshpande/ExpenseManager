import ExpenseTable from "./ExpenseTable";
import { useExpenses } from "../../custom-hooks/useExpenses";

const ExpenseList = () => {
  const expenses = useExpenses();

  return <ExpenseTable expenses={expenses} />;
};

export default ExpenseList;
