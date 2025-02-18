import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { UseBoundStore, StoreApi } from 'zustand';

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 0.5rem;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  margin-right: 0.5rem;
  transform: scale(1.5);
  cursor: pointer;
`;

interface CheckBoxProps<T> {
  options: string[];
  $store: UseBoundStore<StoreApi<T>>;
  storeKey: keyof T;
  addOption: (option: string) => void;
  removeOption: (option: string) => void;
}

export default function CheckBox<T>({
  options,
  $store,
  storeKey,
  addOption,
  removeOption,
}: CheckBoxProps<T>) {
  const selectedOptions = $store((state) => state[storeKey]) as string[];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      addOption(value);
    } else {
      removeOption(value);
    }
  };

  return (
    <CheckBoxContainer>
      {options.map((option) => (
        <StyledLabel key={option}>
          <StyledInput
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </StyledLabel>
      ))}
    </CheckBoxContainer>
  );
}

