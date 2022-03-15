import { useContext } from 'react';
import ToDoListContext from './ToDoListContext';

export default function useToDoListContext() {
  return useContext(ToDoListContext);
}
