import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { UseBoundStore, StoreApi } from 'zustand';

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 1.1rem;
  height: 1.1rem;
`;

const StyledRadio = styled.div<{ checked: boolean }>`
  width: 1.1rem;
  height: 1.1rem;
  background: ${(props) =>
    props.checked ? props.theme.colors.primary : 'white'};
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colors.backgroundBase};
    background: ${(props) => props.theme.colors.blue};
    border-radius: 2rem;
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

const Label = styled.label`
  margin-left: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

interface RadioButtonProps<T>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  $store: UseBoundStore<StoreApi<T>>;
  storeKey: keyof T;
  value: string;
  label: string;
}

export default function RadioButton<T>({
  $store,
  storeKey,
  value,
  label,
  ...inputProps
}: RadioButtonProps<T>) {
  const selectedValue = $store((state) => state[storeKey]);
  const setSelectedValue = $store(
    (state) =>
      // eslint-disable-next-line
      (state as any)[
        `set${String(storeKey).charAt(0).toUpperCase()}${String(storeKey).slice(1)}`
      ]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const isChecked = selectedValue === value;

  return (
    <RadioButtonContainer>
      <HiddenRadio
        {...inputProps}
        checked={isChecked}
        value={value}
        onChange={handleChange}
        aria-label="opción"
      />
      <StyledRadio checked={isChecked} />
      <Label aria-label="Seleccione">{label}</Label>
    </RadioButtonContainer>
  );
}

