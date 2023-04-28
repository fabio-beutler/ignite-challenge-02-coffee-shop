import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem 1.25rem;
  width: 16rem;

  list-style: none;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -1.2rem;
  }
`;

export const Badges = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-size: 0.625rem;
    font-weight: 700;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const Price = styled.div`
  margin-top: 2rem;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;

    display: flex;
    align-items: end;
    gap: 4px;

    strong {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 0.8;
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  gap: 0.5rem;
`;
