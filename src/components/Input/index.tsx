import { InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';
import { useId } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
};

export function Input({ optional, id, ...props }: InputProps) {
  const randomId = useId();
  return (
    <InputContainer>
      <input type='text' {...props} id={`input-${randomId}-${id}`} />
      <label htmlFor={`input-${randomId}-${id}`}>{props.placeholder}</label>
      {optional && <span>Opcional</span>}
    </InputContainer>
  );
}
