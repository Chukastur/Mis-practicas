import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './';
// import App from './App.jsx';
import { PokemonApp } from './PokemonApp.jsx';
import './index.css';
import { TodoApp } from './TodoApp.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={ store }>
      
      {/* <App />       */}
      {/* <PokemonApp /> */}
      {<TodoApp />}

    </Provider>

  </StrictMode>
);
  