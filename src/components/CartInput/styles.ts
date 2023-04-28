import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  max-width: 6rem;

  input {
    width: 2rem;
    background: transparent;
    border: 0;
    outline: none;
    text-align: center;
    line-height: 1;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors['purple']};
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`;
