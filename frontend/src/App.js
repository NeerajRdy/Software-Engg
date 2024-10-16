import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './public/Login';
import SignUp from './public/SignUp';
import Layout from './public/Layout';
import ContactUs from './public/ContactUs';
import Main from './landingPage/Main';
import Portal from './dashboard/Portal'
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>
    },
    {path: '/user',
      element: <Layout/>,
      children:[
        {path: 'login',
           element: <Login />
        },
        {path: 'signup',
          element: <SignUp/>
        },
        {path: 'contactUs',
          element: <ContactUs/>
        },
        {path: 'weatherSearching',
          element: <Portal/>
        },
      ]
    },
  
  ])
  
  return (
    <div>
     <RouterProvider router={router} />
     <Toaster />
    </div>
  );
}

export default App;
