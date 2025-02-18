import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { StoreApi, UseBoundStore } from 'zustand';

const InputGroup = styled.div<{ $noLabel?: boolean }>`
  position: relative;
  ${(props) =>
    props.$noLabel
      ? `
    :label {
      display: none;
    }
  `
      : ''}
`;

const StyledInput = styled.input<{ $require?: boolean }>`
  width: 100%;
  padding: 1.6rem 1rem 0.3rem;
  margin-top: 10px;
  margin-bottom: 5px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 0.8rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-family: inherit;
  overflow: auto;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundBase};

  ${(props) =>
    props.$require
      ? `
      border-color: ${props.theme.colors.danger};
      `
      : ''}
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 1rem;
  left: 0.3rem;
  font-size: 1.1rem;
  padding: 0 0.5rem;
  z-index: 1;
  font-weight: 500;
`;

/* eslint-disable-next-line */
interface InputProps<T extends { [key: string]: any }>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $require?: boolean;
  $label?: string;
  $noLabel?: boolean;
  $store: UseBoundStore<StoreApi<T>>;
  storeKey: keyof T;
  placeholder?: string;
}
/* eslint-disable-next-line */
export default function Input<T extends { [key: string]: any }>({
  $label,
  $noLabel,
  $require,
  $store,
  storeKey,
  placeholder,
  onChange,
  ...rest
}: InputProps<T>) {
  const value = $store((state) => state[storeKey]);
  const setValue = $store(
    (state) =>
      state[
        `set${String(storeKey).charAt(0).toUpperCase()}${String(storeKey).slice(1)}`
      ]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <InputGroup $noLabel={$noLabel}>
      {$label && <StyledLabel>{$label}</StyledLabel>}
      <StyledInput
        $require={$require}
        value={value as string}
        onChange={handleChange}
        placeholder={placeholder}
        {...rest}
      />
    </InputGroup>
  );
}

