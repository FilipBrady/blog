import './App.css';
import RouterComponent from './components/RouterComponent';
import { BrowserRouter } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <Container>
        {params => (
          <div className='App'>
            <NavigationComponent />
            <RouterComponent />
          </div>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
