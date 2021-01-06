import './App.css';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className="app">
      <TodoList items={[]} />
    </div>
  );
}

export default App;
