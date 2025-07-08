import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Chat from './Chat';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { store } from './crud/store';
import { Provider } from 'react-redux';
import { List } from './crud/list';
import Print from './Print';

function App() {
  return (
    <>
      <Provider store={store}>
        <List/>
      </Provider>
      <Print/>
    </>
  )
}

export default App;
