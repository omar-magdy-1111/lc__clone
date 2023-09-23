import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './componants/home/Home';
import SignUp from './componants/Auth/SignUp';
import LogIn from './componants/Auth/LogIn';
import './styleSheet/App.css';
import Cart from "./componants/home/Cart";
import LCstore from "./componants/LCstoreComponants/LCstore";
import Product from "./componants/LCstoreComponants/Product";
import ManProduct from "./componants/productCommponant/ManProduct";
import WomenProduct from "./componants/productCommponant/WomenProduct";
import Favorite from "./componants/productCommponant/Favorite";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='createUser' element={ <SignUp /> } />
        <Route path='logIn' element={ <LogIn /> } />
        <Route path='cart' element={ <Cart /> } />
        <Route path='/' element={ <Outlet /> } >
            <Route path='LCstore/products' element={ <LCstore /> } />
            <Route path="LCstore/products/:productID" element={ <Product /> } />
            <Route path="LCstore/products/man" element={ <ManProduct /> } />
            <Route path="LCstore/products/women" element={ <WomenProduct /> } />
            <Route path="LCstore/products/favorite" element={ <Favorite /> } />
        </Route>
      </Routes> <Outlet />
    </BrowserRouter>
  );
}

export default App;
