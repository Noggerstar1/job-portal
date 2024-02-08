import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./components/menu/Router.tsx";

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
