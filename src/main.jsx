import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'sonner'
import router from './routes/routes'
import { RouterProvider } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-left' />
    </AuthProvider>
  </StrictMode>,
)
