import { Expense } from "../../interfaces/IExpense";
import ExpenseForm from "../ui/common/ExpenseForm";

const AddExpense = () => {
  const onSubmitHandler = async (inputData: Expense): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...inputData,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log("Success:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
    return true;
  };

  return (
    <div>
      <ExpenseForm onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default AddExpense;
