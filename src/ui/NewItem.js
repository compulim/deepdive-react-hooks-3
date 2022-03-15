import './NewItem.css';
import { useCallback, useState } from 'react';
import useAddItem from '../providers/ToDoList/useAddItem';

const NewItem = () => {
  const [value, setValue] = useState('');
  const addItem = useAddItem();

  const handleChange = useCallback(({ target: { value } }) => setValue(value), [setValue]);
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      addItem(value);
      setValue('');
    },
    [addItem, setValue, value]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={value} />
    </form>
  );
};

export default NewItem;
