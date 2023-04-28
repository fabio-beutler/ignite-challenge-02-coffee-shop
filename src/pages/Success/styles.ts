import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  width: 100%;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  > p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.3rem;
`;

export const Info = styled.ul`
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.gradients['white']} padding-box,
    ${({ theme }) => theme.gradients['linear']} border-box;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    padding: 0.5rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors['white']};
  }
  &:nth-child(1) {
    span {
      background-color: ${({ theme }) => theme.colors['purple']};
    }
  }
  &:nth-child(2) {
    span {
      background-color: ${({ theme }) => theme.colors['yellow']};
    }
  }
  &:nth-child(3) {
    span {
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`;

export const Text = styled.div``;
