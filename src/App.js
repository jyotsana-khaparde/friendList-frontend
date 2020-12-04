import { Provider } from 'react-redux'; // provide redux store to react component
import './App.css';
import HomePage from '../src/components/homePage';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage/>
      </div>
    </Provider>
  );
}

export default App;
