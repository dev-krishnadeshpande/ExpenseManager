import { useEffect, useState } from "react";

import { Expense } from "../interfaces/IExpense";

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await fetch("http://localhost:3000/expenses");
      const json = await data.json();
      setExpenses(json);
    } catch (error) {
      console.log(error);
    }
  };

  return expenses;
}
