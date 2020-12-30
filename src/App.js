import './App.css';
import { Provider } from 'react-redux'; //component that wraps the entire application
import store from './redux/store';
import { Navbar } from './components/Navbar';
import { Result } from './components/Result';

//the provider has the possibility to connect to the store
function App() {
  console.log(store.getState());
  return (
    //the store is passed through that props
    <Provider store={store}>
      <div className="App">
        <div>
          <div className="col-12 mt-4 border-top pt-3">
            <Navbar />
          </div>
          <div className="col-12">
            <Result />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default App;
