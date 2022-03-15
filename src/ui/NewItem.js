import './NewItem.css';
import { useCallback, useState } from 'react';

const NewItem = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(({ target: { value } }) => setValue(value), [setValue]);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      onAdd(value);
      setValue('');
    },
    [onAdd, setValue, value]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={value} />
    </form>
  );
};

export default NewItem;
