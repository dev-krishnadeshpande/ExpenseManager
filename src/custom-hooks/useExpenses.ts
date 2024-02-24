import { useEffect, useState } from "react";

import { Expense } from "../interfaces/IExpense";

interface UseExpenses {
  expenses: Expense[];
  isLoading: boolean;
  errorMsg: string;
}

export function useExpenses(): UseExpenses {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const data = await fetch("http://localhost:3000/expenses");
      const json = await data.json();
      setExpenses(json);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return { expenses, isLoading, errorMsg };
}
