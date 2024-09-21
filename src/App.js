
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './reducers';

function App() {
  const count = useSelector((state) => state.reducer.value);
  const {name, address} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
      <div>
          <h1>Count: user{count} {name} {address} </h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
      </div>
  );
}

export default App;
