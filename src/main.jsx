import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store.jsx'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
    <SnackbarProvider  maxSnack={3} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
    </Provider>
  </StrictMode>,
)
