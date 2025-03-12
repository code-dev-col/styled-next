import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { UseBoundStore, StoreApi } from 'zustand';

const DropdownContainer = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const StyledSelect = styled.select<{ $require?: boolean }>`
  width: 100%;
  padding: 1.6rem 1rem 0.3rem;
  margin-top: 8px;
  margin-bottom: 5px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 0.8rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-family: inherit;
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

interface DropdownProps<T>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  $require?: boolean;
  $label?: string;
  $store: UseBoundStore<StoreApi<T>>;
  storeKey: keyof T;
  options: string[];
}

export default function Dropdown<T>({
  $label,
  $require,
  $store,
  storeKey,
  options,
  onChange,
  ...rest
}: DropdownProps<T>) {
  const value = $store((state) => state[storeKey]);
  const setValue = $store(
    (state) =>
      /* eslint-disable-next-line */
      (state as any)[
        `set${String(storeKey).charAt(0).toUpperCase()}${String(storeKey).slice(1)}`
      ]
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setValue(value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <DropdownContainer>
      {$label && <StyledLabel>{$label}</StyledLabel>}
      <StyledSelect
        aria-label="Seleccionar una opción"
        $require={$require}
        value={value as string}
        onChange={handleChange}
        {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
}

