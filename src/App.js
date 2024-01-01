import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calc1 from './calc1';
import Calc2 from './calc2';
import Dummyapi from './dummyapi';
import Jsonapi from './jsonapi';
import Result from './result';
import Rickyapi from './rickyapi';
import Tictac1 from './tictac1';
import Tictac2 from './tictac2';
import Tictaccom from './tictaccom';
import Todo from './todo';
import Prodetail from './Prodetail';
import Cart from './Cart';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      {/* <Calc1 /> */}
      {/* <Calc2 /> */}
      {/* <Tictac1 /> */}
      {/* <Tictac2 /> */}
      {/* <Tictaccom /> */}
      {/* <Todo /> */}
      {/* < Result /> */}
      {/* <Jsonapi /> */}
      {/* < Rickyapi /> */}
      {/* < Dummyapi /> */}

      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Dummyapi />}></Route>
        <Route path='/product/:id' element={<Prodetail />}></Route>
        <Route path='/cart/' element={<Cart />}></Route>
      </Routes>
      </Provider>
    </>
  );
}

export default App;
