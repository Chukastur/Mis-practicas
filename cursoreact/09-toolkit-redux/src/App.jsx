import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './store';
import './App.css';

function App() {

  const { counter } = useSelector ( state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <p>count is { counter }</p>
      <div>
        <button onClick={ () => dispatch ( increment () ) }>Suma</button>
          
        <button onClick={ () => dispatch ( decrement () ) }>Resta</button>

        <button onClick={ () => dispatch ( incrementBy (2) ) }>Suma 2</button> 
      </div>
    </>

  );
};

export default App;
