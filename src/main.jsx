import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'

import Root from './routes/Root'
import Home from './routes/Home'
import Destination from './routes/Destination'
import { jsonLoader } from './utils/jsonLoader'    
import Crew from './routes/Crew'
import Technology from './routes/Technology'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "destination",
        element: <Destination />,
        loader: () => jsonLoader("destinations")
      },
      {
        path: "crew",
        element: <Crew />,
        loader: () => jsonLoader("crew")
      },
      {
        path: "technology",
        element: <Technology />,
        loader: () => jsonLoader("technology")
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{v7_startTransition: true}} />
  </StrictMode>,
)
