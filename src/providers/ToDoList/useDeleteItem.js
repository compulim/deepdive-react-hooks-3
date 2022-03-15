import useToDoListContext from './private/useToDoListContext';

export default function useDeleteItem() {
  return useToDoListContext().deleteItem;
}
