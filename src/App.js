import './App.css';
import ToDoList from './ui/ToDoList';
import ToDoListProvider from './providers/ToDoList/ToDoListProvider';

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
