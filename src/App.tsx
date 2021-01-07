import { useContext } from 'react';
import './App.css';
import {
  Form
} from 'react-bootstrap';
import logo from './assets/logo.png';
import { TodoList } from './components/TodoList/TodoList';
import { Search } from './components/Search/Search';
import { Context as ShapeListContext , ContextType as ShapeListContextType } from './contexts/ShapeListContext';
import { Context as ThemeContext , ContextType as ThemeContextType } from './contexts/ThemeContext';
import { BiAddToQueue } from 'react-icons/bi';
import { AddOrUpdateItem } from './components/AddOrUpdateItem/AddOrUpdateItem';

function App() {
  const { shapeItemsFiltered, handleOpenModal } = useContext(ShapeListContext) as ShapeListContextType;
  const { isDarkMode, handleChangeTheme } = useContext(ThemeContext) as ThemeContextType;
  

  return (
    <div className={` app ${isDarkMode ? 'app--dark-mode' : ''} `}>
      <div className='app__inner'>
        <header className='app__header'>
          <div>
            <Form.Check id="custom-switch" type='switch' label='Dark Mode' onChange={() => handleChangeTheme()} />
          </div>
          <div>
            <img src={logo} width={50} height={50} alt='logo tuttodev' className='app__logo' />
            <h1 className='app__title'>TuttoDevList</h1>
          </div>
        </header>
        <div className='app_options'>
          <Search />
          <BiAddToQueue size={30} color={isDarkMode ? '#fff' : 'green'} style={{ cursor: 'pointer' }} onClick={() => handleOpenModal()} />
        </div>
        <TodoList items={shapeItemsFiltered} />

        <AddOrUpdateItem />
        <footer>
          Created by tuttodev © 2021
          <div>
            <a href='https://tuttodev.dev/' target="_black">https://tuttodev.dev</a>
          </div>
          <div>
            <a href='https://github.com/juansebastian2426/tuttodevlist' target="_black">Repo Github</a>
          </div>
        </footer>
      </div>  
    </div>
  );
}

export default App;
