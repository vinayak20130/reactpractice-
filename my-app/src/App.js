import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter-App/Counter';
import Todolist from './components/To-Do-List/Todolist';
import Colorchanger from './components/colorchanger/Colorchanger';
import PasswordGenrator from './components/To-Do-List/PasswordGenrator/PasswordGenrator';

function App() {
  return (
    <div>
  <PasswordGenrator/>
     {/* <Colorchanger/> */}
    </div>
  );
}

export default App;
