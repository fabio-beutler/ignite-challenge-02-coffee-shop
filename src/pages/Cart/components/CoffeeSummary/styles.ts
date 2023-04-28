import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  button {
    margin-top: 1.5rem;
    width: 100%;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['yellow']};
    color: ${({ theme }) => theme.colors['white']};
    padding: 0.75rem;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.8);
    }
    &:disabled:hover {
      background-color: ${({ theme }) => theme.colors['yellow']};
    }
  }
`;

export const Row = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(3) {
    p,
    span {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }

  p {
    font-size: 0.875rem;
  }
`;
