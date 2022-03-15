import { useCallback } from 'react';
import './ToDoItem.css';

const ToDoItem = ({ checked, children, id, onCheck, onDelete, onUncheck }) => {
  const handleCheck = useCallback(
    ({ target: { checked } }) => (checked ? onCheck?.({ id }) : onUncheck?.({ id })),
    [id, onCheck, onUncheck]
  );

  const handleDelete = useCallback(() => onDelete?.({ id }), [id, onDelete]);

  return (
    <li className="to-do-item">
      <input checked={checked} onChange={handleCheck} type="checkbox" />
      <div>{children}</div>
      <button onClick={handleDelete} type="button">
        &times;
      </button>
    </li>
  );
};

export default ToDoItem;
