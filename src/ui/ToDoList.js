import './ToDoList.css';
import { useCallback, useState } from 'react';
import NewItem from './NewItem';
import ToDoItem from './ToDoItem';

function uniqueId() {
  return Math.random().toString(36).substr(2, 7);
}

const ToDoList = () => {
  const [items, setItems] = useState(() => [
    {
      checked: true,
      id: 't0',
      text: 'Buy milk'
    },
    {
      id: 't1',
      text: 'Buy eggs'
    }
  ]);

  const toggleItem = useCallback(
    ({ checked, id }) => setItems(items => items.map(item => (item.id === id ? { ...item, checked } : item))),
    [setItems]
  );

  const handleAdd = useCallback(text => setItems(items => [...items, { id: `t-${uniqueId()}`, text }]), []);
  const handleCheck = useCallback(({ id }) => toggleItem({ checked: true, id }), [toggleItem]);
  const handleDelete = useCallback(({ id }) => setItems(items => items.filter(item => item.id !== id)), [setItems]);
  const handleUncheck = useCallback(({ id }) => toggleItem({ checked: false, id }), [toggleItem]);

  console.log('RENDER', { items });

  return (
    <div>
      <ul className="to-do-list">
        {items.map(({ checked, id, text }) => (
          <ToDoItem
            checked={!!checked}
            id={id}
            key={id}
            onCheck={handleCheck}
            onDelete={handleDelete}
            onUncheck={handleUncheck}
          >
            {text}
          </ToDoItem>
        ))}
      </ul>
      <NewItem onAdd={handleAdd} />
    </div>
  );
};

export default ToDoList;
