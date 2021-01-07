import { useContext } from 'react';
import './App.css';
import logo from './assets/tuttodev-logo.webp';
import { TodoList } from './components/TodoList/TodoList';
import { Search } from './components/Search/Search';
import { Context, ContextType } from './contexts/ShapeListContext';
import { BiAddToQueue } from 'react-icons/bi';
import { AddOrUpdateItem } from './components/AddOrUpdateItem/AddOrUpdateItem';

function App() {
  const { shapeItemsFiltered, handleOpenModal } = useContext(Context) as ContextType;
  

  return (
    <div className="app">
      <header className='app__header'>
        <img src={logo} width={50} height={50} alt='logo tuttodev' className='app__logo' />
        <h1 className='app__title'>TuttodevList</h1>
      </header>
      <div className='app_options'>
        <Search />
        <BiAddToQueue size={30} color='green' style={{ cursor: 'pointer' }} onClick={() => handleOpenModal()} />
      </div>
      <TodoList items={shapeItemsFiltered} />

      <AddOrUpdateItem />
    </div>
  );
}

export default App;
