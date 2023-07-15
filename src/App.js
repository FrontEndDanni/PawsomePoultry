import React from 'react';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
