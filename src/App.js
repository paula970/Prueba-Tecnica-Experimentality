import './App.css';
import { Provider } from 'react-redux'; //componente que envuelve toda la aplicación
import store from './redux/store';
import { SearchBar } from './components/SearchBar';
import { Result } from './components/Result';

//el provider tiene la posibilidad de conectarse al store

function App() {

  console.log(store.getState());
  return (
    //se le pasa el store por medio de ese props
    <Provider store={store}> 
      <div className="App">
        <div className="row">
          <div className="col-12 mt-4 border-top pt-3">
            <SearchBar/>
          </div>
          <div className="col-12">
            <Result/>
            
          </div>
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
