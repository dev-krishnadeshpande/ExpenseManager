import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "@fluentui/react";

// Define columns for the table
const columns: IColumn[] = [
  {
    key: "column1",
    name: "Column 1",
    fieldName: "column1",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column2",
    name: "Column 2",
    fieldName: "column2",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column3",
    name: "Column 3",
    fieldName: "column3",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
];

// Sample data
const items = [
  { key: "item1", column1: "Value 1", column2: "Value 2", column3: "Value 3" },
  { key: "item2", column1: "Value 4", column2: "Value 5", column3: "Value 6" },
  { key: "item3", column1: "Value 7", column2: "Value 8", column3: "Value 9" },
];

function MyTable() {
  return (
    <DetailsList
      items={items}
      columns={columns}
      selectionMode={SelectionMode.none}
      layoutMode={DetailsListLayoutMode.fixedColumns}
    />
  );
}

export default MyTable;
