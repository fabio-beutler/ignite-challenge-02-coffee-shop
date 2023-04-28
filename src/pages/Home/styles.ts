import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.75rem 0;
`;

export const HeroText = styled.div`
  flex: 1;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  > p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const HeroAttributes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: start;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  p {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    span {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      color: ${({ theme }) => theme.colors['white']};
    }
    &:nth-child(1) {
      span {
        background-color: ${({ theme }) => theme.colors['yellow-dark']};
      }
    }

    &:nth-child(2) {
      span {
        background-color: ${({ theme }) => theme.colors['base-text']};
      }
    }
    &:nth-child(3) {
      span {
        background-color: ${({ theme }) => theme.colors['yellow']};
      }
    }
    &:nth-child(4) {
      span {
        background-color: ${({ theme }) => theme.colors['purple']};
      }
    }
  }
`;
