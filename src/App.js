import './App.css';
import ToDoListProvider from './providers/ToDoList/ToDoListProvider';
import ToDoList from './ui/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoListProvider>
        <ToDoList />
      </ToDoListProvider>
    </div>
  );
}

export default App;
