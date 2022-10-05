
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () =>{
    const {totalQuantity} = useSelector((state)=>state.CartReducer)
    console.log(totalQuantity);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand logo" to="/">redux website</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="ms-auto navbar-nav mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping cart-icon" ></i><span className="cart-span"> {totalQuantity > 0 ? totalQuantity : 0 } </span></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;