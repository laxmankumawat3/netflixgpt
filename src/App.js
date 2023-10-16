import './App.css';
import Login from './component/Login';
import Brower from './component/Brower';

import Error from './component/Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Movie from './component/Movie';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
      errorElement : <Error/>
    },
    {
      path: "/browse",
      element: (
        // <Protected>
          <Brower/>
        // </Protected>
      ) ,
      errorElement : <Error/>
    },
    {
      path  : "/login",
     element : (<Movie/>),
     errorElement : <Error/>
    }
  ]);

  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
