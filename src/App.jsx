import { useState,useEffect} from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Paste from './components/paste'
import ViewPaste from './components/ViewPaste'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>,
    },
    {
      path:'/pastes',
      element: <div>
        <Navbar />
        < Paste />
        </div>,
    },
    {
      path:'/pastes/:id',
      element: <div>
        <Navbar />
        <ViewPaste />
        </div>,
    }
  ]
);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
