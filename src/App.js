import React from 'react';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/productpage",
      element:<ProductPage/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
