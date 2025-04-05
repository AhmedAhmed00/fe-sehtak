import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Spinner from "./Spinner";

const DropdownContainer = styled.div`
  position: relative;
  font-family: Arial, sans-serif;
`;

const InputField = styled.div`
  border: 1px solid
    ${({ dangerBorder }) => (dangerBorder ? "red" : "var(--color-grey-300)")};
  border-radius: 8px;
  padding: 0.4rem 1.2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  cursor: pointer;
  background-color: #fff;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Tag = styled.span`
  background-color: var(--color-primary);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RemoveTag = styled.span`
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 5px;
  padding: 5px;
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

const MultiSelectDropdown = ({ options, register, setValue, name ,defaultValue =[],isLoading }) => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(()=>{ 
    if(defaultValue){ 
      setSelectedOptions(defaultValue)
      setValue(name, defaultValue.map(item =>item.id || item))
    }
  },[])

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (!selectedOptions.some((item) => item.id === option.id)) {
      const newSelection = [...selectedOptions, option];
      setSelectedOptions(newSelection);
      setValue(name, newSelection.map((item) => item.id)); // Store only IDs
    }
  };

  const handleRemove = (option) => {
    const updatedSelection = selectedOptions.filter((item) => item.id !== option.id);
    setSelectedOptions(updatedSelection);
    setValue(name, updatedSelection.map((item) => item.id)); // Store only IDs
  };

  return (
    <DropdownContainer >
      <InputField  onClick={toggleDropdown}>
        <TagContainer>
          {selectedOptions.map((option) => (
            <Tag key={option.id}>
              {option.name}
              <RemoveTag onClick={() => handleRemove(option)}>×</RemoveTag>
            </Tag>
          ))}
        </TagContainer>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </InputField>

      {/* Hidden input to store values for React Hook Form */}
      <input type="hidden" {...register(name)} value={selectedOptions.map((item) => item.id)} />


      {isOpen && (
        
        <DropdownList>
        {!isLoading ?  options.map((option) => (
            <DropdownItem key={option.id} onClick={() => handleSelect(option)}>
              {option.name}
            </DropdownItem>
          )) : <Spinner margin={"1rem auto"} />}
        
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default MultiSelectDropdown;
