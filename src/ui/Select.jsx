import styled from "styled-components";

export const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.4rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
`;

export const Option = styled.option`
  font-size: 12px;
   color: var(--color-text);
  background-color: var(--color-grey-100);
  
  &:hover {
    background-color: "red";
    color: white;
  }
`;

export default function Select({ items ,register ,chooseValue = "name" ,renderValue }) {
  return (
     <StyledSelect {...register} defaultValue="">
 
      <Option value="" disabled>
        إختر عنصر
      </Option>
      {items?.map((item, index) => (
        <Option key={index} value={item[chooseValue] || item}>
          {item[renderValue] ?  item[renderValue]  : item.name || item.case_number || item}
        </Option>
      ))}
    </StyledSelect>
  );
}
