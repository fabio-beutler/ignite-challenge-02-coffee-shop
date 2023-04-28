import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: start;
  justify-content: space-between;

  &:first-child {
    padding-top: 0.5rem;
  }

  span {
    margin-top: 0.1rem;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 1.125rem;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0 0.7rem;
  border-radius: 6px;
  text-transform: uppercase;
  line-height: 0;
  cursor: pointer;
  transition: all 0.2s;

  span {
    color: ${({ theme }) => theme.colors['purple']};
    margin: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`;
