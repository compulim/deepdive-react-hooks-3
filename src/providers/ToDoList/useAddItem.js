import useToDoListContext from './private/useToDoListContext';

export default function useAddItem() {
  return useToDoListContext().addItem;
}
