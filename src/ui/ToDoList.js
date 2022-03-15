import './ToDoList.css';
import NewItem from './NewItem';
import ToDoItem from './ToDoItem';
import useItems from '../providers/ToDoList/useItems';

const ToDoList = () => {
  const [items] = useItems();

  return (
    <div>
      <ul className="to-do-list">
        {items.map(({ id }) => (
          <ToDoItem id={id} key={id} />
        ))}
      </ul>
      <NewItem />
    </div>
  );
};

export default ToDoList;
