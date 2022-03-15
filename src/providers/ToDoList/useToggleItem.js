import useToDoListContext from "./private/useToDoListContext";

export default function useToggleItem() {
  return useToDoListContext().toggleItem;
}
