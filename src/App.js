import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import {RouterProvider} from 'react-router-dom'
import Books from './components/Books';
import Home from './components/Home';
import Login from './components/Login';
import FileRender from './components/FileRender';
import Bookdesc from './components/Bookdesc';
import Signup from './components/Signup';

function App() {
  let router=createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"signup",
          element:<Signup/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"books",
          element:<Books/>
        }
      ]
    }
])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;