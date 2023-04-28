import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
  }
`;

interface HeaderProps {
  color: 'yellow-dark' | 'purple';
}

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;

  span {
    color: ${({ theme, color }) => theme.colors[color]};
  }

  h3 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const FormContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`;

export const Form = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-areas:
    'cep na na'
    'rua rua rua'
    'number complement complement'
    'neighborhood city state';

  grid-template-columns: 1fr 1.3fr 4rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  > div {
    &:nth-child(1) {
      grid-area: cep;
    }
    &:nth-child(2) {
      grid-area: rua;
    }
    &:nth-child(3) {
      grid-area: number;
    }
    &:nth-child(4) {
      grid-area: complement;
    }
    &:nth-child(5) {
      grid-area: neighborhood;
    }
    &:nth-child(6) {
      grid-area: city;
    }
    &:nth-child(7) {
      grid-area: state;
    }
  }
`;

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`;

export const Payment = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  label {
    cursor: pointer;
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    gap: 0.75rem;
    font-size: 0.75rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    &:has(input[type='radio']:checked) {
      background-color: ${({ theme }) => theme.colors['purple-light']};
      border: 1px solid ${({ theme }) => theme.colors['purple']};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors['purple']};
    }

    input[type='radio'] {
      display: none;
    }
  }
`;
