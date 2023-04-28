import { InputHTMLAttributes, forwardRef } from 'react';
import { InputContainer } from './styles';
import { useId } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  error?: string;
};

function BaseInput({ optional, id, error, ...props }: InputProps, ref: any) {
  const randomId = useId();
  return (
    <InputContainer>
      <input type='text' {...props} id={`input-${randomId}-${id}`} ref={ref} />
      <label htmlFor={`input-${randomId}-${id}`}>{props.placeholder}</label>
      {optional && <span>Opcional</span>}
      {error && <p>{error}</p>}
    </InputContainer>
  );
}

export const Input = forwardRef(BaseInput);
