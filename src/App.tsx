import './styles/App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App flex flex-col h-screen bg-anthracite text-white">
      <div className="container mx-auto">
      <TodoList />
      </div>
    </div>
  );
}

export default App;
