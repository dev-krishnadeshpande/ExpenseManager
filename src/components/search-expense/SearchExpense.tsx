import ExpenseTable from "../ui/common/ExpenseTable";
import { useExpenses } from "../../custom-hooks/useExpenses";

const SearchExpense = () => {
  const { expenses, isLoading, errorMsg } = useExpenses();

  if (isLoading) return <h2>Loading...</h2>;

  if (errorMsg) return <p className="error-msg">{errorMsg}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h2>Expense Table</h2>
      <ExpenseTable
        expenses={expenses}
        errorMsg={errorMsg}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchExpense;
