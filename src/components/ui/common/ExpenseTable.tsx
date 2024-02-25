import { FC } from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "@fluentui/react";
import { DefaultButton } from "@fluentui/react/lib/Button";

import { ExpenseProps } from "../../../interfaces/IExpense";

const columns: IColumn[] = [
  {
    key: "expenseType",
    name: "Expense Type",
    fieldName: "expenseType",
    minWidth: 60,
    maxWidth: 120,
    isResizable: true,
  },
  {
    key: "expenseAmount",
    name: "Expense Amount",
    fieldName: "expenseAmount",
    minWidth: 60,
    maxWidth: 120,
    isResizable: true,
  },
  {
    key: "description",
    name: "Description",
    fieldName: "description",
    minWidth: 60,
    maxWidth: 120,
    isResizable: true,
  },
  {
    key: "expenseDate",
    name: "Expense Date",
    fieldName: "expenseDate",
    minWidth: 60,
    maxWidth: 120,
    isResizable: true,
  },
  {
    key: "edit_expense",
    name: "Edit",
    fieldName: "edit_expense",
    minWidth: 60,
    maxWidth: 120,
    isResizable: true,
    onRender: () => (
      <DefaultButton
        text="Edit"
        allowDisabledFocus
        style={{ backgroundColor: "green", color: "white" }}
      />
    ),
  },
  {
    key: "delete_expense",
    name: "Delete",
    fieldName: "delete_expense",
    minWidth: 60,
    maxWidth: 120,
    isResizable: true,
    onRender: () => (
      <DefaultButton
        text="Delete"
        allowDisabledFocus
        style={{ backgroundColor: "#000000", color: "white" }}
      />
    ),
  },
];

const ExpenseTable: FC<ExpenseProps> = ({ expenses }) => {
  return (
    <div style={{ width: "55vw" }}>
      <DetailsList
        items={expenses}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        styles={{
          root: {
            selectors: {
              ".ms-DetailsRow": { background: "lightblue" },
              ".ms-DetailsRow:hover": { background: "lightgrey" },
            },
          },
        }}
      />
    </div>
  );
};

export default ExpenseTable;
