import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  img {
    object-fit: cover;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors['purple-light']};
      color: ${({ theme }) => theme.colors['purple-dark']};

      > span {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors['purple']};
      }
    }
  }
`;
