import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import ErrorPage from './components/ErrorPage';

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        path: "/home",
        element: <Navbar/>
      },
      {
        path: "/dashboard",
        element: <Home/>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
])
const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
