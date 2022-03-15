import './ToDoItem.css';
import { useCallback, useMemo } from 'react';
import useDeleteItem from '../providers/ToDoList/useDeleteItem';
import useItems from '../providers/ToDoList/useItems';
import useToggleItem from '../providers/ToDoList/useToggleItem';

const ToDoItem = ({ id }) => {
  const [items] = useItems();
  const deleteItem = useDeleteItem();
  const toggleItem = useToggleItem();

  const item = useMemo(() => items.find(item => item.id === id), [id, items]);

  const checked = !!item?.checked;
  const text = item?.text;

  const handleCheck = useCallback(
    ({ target: { checked } }) => (checked ? toggleItem({ checked: true, id }) : toggleItem({ checked: false, id })),
    [id, toggleItem]
  );
  const handleDelete = useCallback(() => deleteItem({ id }), [id, deleteItem]);

  return (
    <li className="to-do-item">
      <input checked={checked} onChange={handleCheck} type="checkbox" />
      <div>{text}</div>
      <button onClick={handleDelete} type="button">
        &times;
      </button>
    </li>
  );
};

export default ToDoItem;
