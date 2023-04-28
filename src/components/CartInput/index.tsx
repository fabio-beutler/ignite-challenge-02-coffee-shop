import { Minus, Plus } from 'phosphor-react';
import { Container } from './styles';
import { useState } from 'react';

export function CartInput() {
  const [value, setValue] = useState(0);

  function handleIncreaseValue() {
    setValue((prevValue) => {
      if (prevValue < 20) {
        return prevValue + 1;
      }
      return prevValue;
    });
  }

  function handleDecreaseValue() {
    setValue((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      }
      return prevValue;
    });
  }

  return (
    <Container>
      <button type='button' onClick={handleDecreaseValue}>
        <Minus />
      </button>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button type='button' onClick={handleIncreaseValue}>
        <Plus />
      </button>
    </Container>
  );
}
