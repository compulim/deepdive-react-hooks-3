import useToDoListContext from './private/useToDoListContext';

export default function useItems() {
  return useToDoListContext().itemsState;
}
