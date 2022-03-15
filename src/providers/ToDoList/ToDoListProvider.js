import { useCallback, useMemo, useState } from 'react';
import ToDoListContext from './private/ToDoListContext';

function uniqueId() {
  return Math.random().toString(36).substring(2, 7);
}

const ToDoListProvider = ({ children }) => {
  const [items, setItems] = useState(() => [
    {
      checked: true,
      id: 't0',
      text: 'Buy milk'
    },
    {
      id: 't1',
      text: 'Buy magazines'
    }
  ]);

  const addItem = useCallback(text => setItems(items => [...items, { id: `t-${uniqueId()}`, text }]), []);
  const deleteItem = useCallback(({ id }) => setItems(items => items.filter(item => item.id !== id)), [setItems]);
  const itemsState = useMemo(() => Object.freeze([Object.freeze(items)]), [items]);
  const toggleItem = useCallback(
    ({ checked, id }) => setItems(items => items.map(item => (item.id === id ? { ...item, checked } : item))),
    [setItems]
  );

  const context = useMemo(
    () => ({
      addItem,
      deleteItem,
      itemsState,
      toggleItem
    }),
    [addItem, deleteItem, itemsState, toggleItem]
  );

  return <ToDoListContext.Provider value={context}>{children}</ToDoListContext.Provider>;
};

export default ToDoListProvider;
