import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiContextProvider } from './contexts/ApiContextProvider.jsx'
import LoginForm from './pages/loginPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiContextProvider>
    <App />
    <LoginForm />
    </ApiContextProvider>
  </StrictMode>,
)
