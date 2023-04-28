import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  label {
    position: absolute;
    top: 14px;
    left: 13px;
    font-size: 0.875rem;
  }

  input[type='text']:not(:placeholder-shown) + label,
  input[type='text']:not(:placeholder-shown) ~ span {
    opacity: 0;
  }

  input[type='text'] ~ span {
    position: absolute;
    top: 16px;
    right: 13px;
    font-style: italic;
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.75rem;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    line-height: 1;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['yellow']};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
      visibility: hidden;
    }
  }
`;
