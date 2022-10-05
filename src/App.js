import Navbar from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Details from "./Components/Details";


const App = () =>{
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/cart" element ={<Cart />} />
        <Route path="/details/:id" element = {<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;