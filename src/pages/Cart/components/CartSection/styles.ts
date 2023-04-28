import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 448px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
  }
`;

export const CartContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`;
