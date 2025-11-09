import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'sonner'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right' />
    </AuthProvider>
  </StrictMode>,
)
