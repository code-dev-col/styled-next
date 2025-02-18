import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { UseBoundStore, StoreApi } from 'zustand';

const TextBoxContainer = styled.div<{ $noLabel?: boolean }>`
  position: relative;
  ${(props) =>
    props.$noLabel
      ? `
    label {
      display: none;
    }
  `
      : ''}
`;

const StyledTextArea = styled.textarea<{
  $require?: boolean;
  $height?: string;
}>`
  width: 100%;
  height: ${(props) => props.$height || '100px'};
  padding: 1.6rem 1rem 0.3rem;
  margin-top: 8px;
  margin-bottom: 5px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 1rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-family: inherit;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundBase};
  overflow-y: auto;
  resize: vertical;

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

interface TextBoxProps<T>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  $require?: boolean;
  $label?: string;
  $noLabel?: boolean;
  $height?: string;
  $store: UseBoundStore<StoreApi<T>>;
  storeKey: keyof T;
}

export default function TextBox<T>({
  $label,
  $noLabel,
  $require,
  $height,
  $store,
  storeKey,
  onChange,
  ...rest
}: TextBoxProps<T>) {
  const value = $store((state) => state[storeKey]);
  const setValue = $store(
    (state) =>
      /* eslint-disable-next-line */
      (state as any)[
        `set${String(storeKey).charAt(0).toUpperCase()}${String(storeKey).slice(1)}`
      ]
  );

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValue(value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextBoxContainer $noLabel={$noLabel}>
      {$label && <StyledLabel>{$label}</StyledLabel>}
      <StyledTextArea
        $require={$require}
        $height={$height}
        value={value as string}
        onChange={handleChange}
        {...rest}
      />
    </TextBoxContainer>
  );
}


