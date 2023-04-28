import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface CartIconProps {
  value?: number;
}

export const CartIcon = styled(Link)<CartIconProps>`
  display: flex;
  align-self: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};

  position: relative;

  ${({ value }) =>
    value &&
    css`
      &::after {
        content: '${value}';
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors['yellow-dark']};
        color: ${({ theme }) => theme.colors['white']};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 1;
        width: 1rem;
        height: 1rem;
        padding: 1px;
      }
    `}
`;
