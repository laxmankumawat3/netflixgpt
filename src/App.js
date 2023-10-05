import './App.css';
import Login from './component/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
  ]);

  return (
    <div >
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
