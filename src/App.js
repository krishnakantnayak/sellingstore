
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Cart from './screens/cart';
import Products from './screens/products';
import Home from './screens/home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {store} from './redux/store';
import {Provider } from 'react-redux';
import SignupForm from './components/authComps/signup';


function App() {
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>,
      children:[
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "products", element: <Products /> },
        { path: "signup", element: <SignupForm /> },
        
      ],
    },
    
  ])

  // const auth=app.auth()
  // console.log("auth obj",auth);
  return (
    <Provider store={store}>
      <div className="App px-4">
        <RouterProvider router={router}/>
      </div>
    </Provider>
    
  );
}

export default App;
