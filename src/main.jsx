import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './routes/App';
import Home from "./routes/Home/Home"
import PlaceOrder from "./routes/Place Order/PlaceOrder"
import Cart from "./routes/Cart/Cart";
import StoreContextProvider  from './components/Context/StoreContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/>, },
      { path: "/order", element: <PlaceOrder />, },
      { path: "/cart", element: <Cart />, },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router}/>
    </StoreContextProvider>
    
  </StrictMode>,
)
