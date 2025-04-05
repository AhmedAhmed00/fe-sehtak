import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Controller } from "react-hook-form";
import { format } from "date-fns";

// Styled Wrapper for DatePicker
const DatePickerStyled = styled(DatePicker)`

  border: 1px solid var(--color-grey-300) !important;
height  :38px !important ;
  border-radius: 4px;
  font-size: 14px !important;
  width: 100%;
  text-align: start;
  cursor: pointer;
  outline: none;
`;

// Custom Input for React Hook Form to focus properly
const CustomInput = styled.input`
  border: 2px solid #007bff;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #0056b3;
  }
`;

const DatePickerInput = ({ control, name, formatDate = "yyyy-MM-dd" }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePickerStyled
          dateFormatCalendar={formatDate}
          showYearPicker={Boolean(formatDate==="yyyy")}
          dateFormat={formatDate}
          selected={field.value ? new Date(field.value) : null} // Ensure correct date object
          onChange={(date) => field.onChange(date ? format(date, formatDate) : "")}
          customInput={<CustomInput />}
        />
      )}
    />
  );
}

export default DatePickerInput;
