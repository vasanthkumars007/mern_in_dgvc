import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import {createBrowserRouter, createBrowswerRouter,RouterProvider}
from"react-router-dom";

const config = createBrowserRouter([
  {path: "/Home",element: <Home/>},
  {path: "/About",element: <About/>}
]);

function App() {
  return (
    <div>
     <RouterProvider config={config}/>
    </div>
  );
}

export default App;


