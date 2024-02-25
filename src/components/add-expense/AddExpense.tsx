import {
  TextField,
  PrimaryButton,
  Dropdown,
  IDropdownOption,
} from "@fluentui/react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Expense } from "../../interfaces/IExpense";

const AddExpense = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Expense>();

  const onSubmit: SubmitHandler<Expense> = (data) => {
    console.log(data);
    reset();
  };

  const handleDropdownChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    if (option) {
      setValue("expenseType", option.text);
    }
  };

  const options: IDropdownOption[] = [
    { key: "cash", text: "Cash" },
    { key: "card", text: "Card" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "40vw",
        margin: "auto",
        marginTop: "70px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Dropdown
        placeholder="Select Expense Type"
        label="Expense Type"
        options={options}
        onChange={handleDropdownChange}
        defaultValue=""
        required
      />
      <TextField
        label="Expense Date"
        placeholder="dd/mm/yyyy"
        {...register("expenseDate")}
        required
      />
      <TextField
        label="Expense Amount"
        placeholder="Enter Amount (in INR)"
        required
        {...register("expenseAmount")}
      />
      <TextField
        label="Description"
        placeholder="Enter Description"
        multiline
        rows={4}
        {...register("description")}
      />
      <PrimaryButton type="submit" style={{ width: "25%" }}>
        Add Expense
      </PrimaryButton>
    </form>
  );
};

export default AddExpense;
