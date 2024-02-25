import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  PrimaryButton,
  Dropdown,
  IDropdownOption,
} from "@fluentui/react";

import { Expense } from "../../../interfaces/IExpense";
import { useForm } from "react-hook-form";

interface ExpenseFormProps {
  onSubmitHandler: (data: Expense) => Promise<boolean>;
}

const ExpenseForm: FC<ExpenseFormProps> = ({ onSubmitHandler }) => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    // reset,
    // formState: { errors },
  } = useForm<Expense>();

  const onFormSubmit = async (data: Expense) => {
    const isSuccess = await onSubmitHandler(data);

    if (isSuccess) {
      setSuccessMsg("Expense added successfully");
      const s = setTimeout(() => {
        setSuccessMsg("");
        navigate("/");
        clearTimeout(s);
      }, 3000);
      setErrorMsg("");
    } else {
      setErrorMsg("Couldn't add Expense");
      setSuccessMsg("");
    }
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
    <>
      {successMsg && <p className="success-msg">{successMsg}</p>}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <form
        onSubmit={handleSubmit(onFormSubmit)}
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
    </>
  );
};

export default ExpenseForm;
