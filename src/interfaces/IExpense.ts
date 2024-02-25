export interface Expense {
  id?: string;
  expenseType: string;
  expenseAmount: string;
  description: string;
  expenseDate: string;
}

export interface ExpenseProps {
  expenses: Expense[];
  isLoading: boolean;
  errorMsg: string;
}
