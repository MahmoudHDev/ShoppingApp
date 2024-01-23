import { Link } from "react-router-dom";
import '../../App.css';
import cart from "./cart.png";



export default function Header() {

    const numberItemsInCart = 1;



    return (
        <div className="container-fluid fixed-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-light-subtle">
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <span className="fs-3 text-danger-emphasis">Nile Shopping</span>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="#" className="nav-link px-2">FAQs</Link></li>
                    <li><Link to="/about" className="nav-link px-2">About</Link></li>
                </ul>

                <div className="col-md-4 text-end">
                    <Link to="/login"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
                    <Link to="/register"><button type="button" className="btn btn-primary">Register</button></Link>

                    <Link to="/cart">
                        <button type="button" className="btn btn-outline top-cart">
                            <img src={cart} alt="Cart Icon" height={"35px"} width={"35px"} style={{ margin: "2.5px" }}></img>
                            <span class="badge" style={numberItemsInCart === 0 ? {visibility:"hidden"} : { visibility:"visible" ,color: "red", fontSize:"15px"}}>{numberItemsInCart}</span>
                        </button>
                    </Link>
                    
                </div>

            </header>
        </div>
    );
}
