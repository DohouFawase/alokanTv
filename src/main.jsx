import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router'
import routes from './routes/routes.jsx'
import { ThemeProvider } from './components/context/themecontext.jsx'
createRoot(document.getElementById('root')).render(
<ThemeProvider>

<StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
</ThemeProvider>

)
