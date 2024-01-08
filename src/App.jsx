import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Dashboard from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/*",
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
