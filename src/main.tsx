import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './styles/global.tsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
