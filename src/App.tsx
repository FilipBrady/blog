import './App.css';
import RouterComponent from './components/RouterComponent';
import { BrowserRouter } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationComponent />
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
