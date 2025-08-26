
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

import { store } from './store'
import { JournalApp } from './JournalApp'
import './styles.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>

);
