import { Link } from "react-router-dom";
import '../../App.css';

export default function Header() {
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
                    <li><Link to="#" className="nav-link px-2">Features</Link></li>
                    <li><Link to="#" className="nav-link px-2">Pricing</Link></li>
                    <li><Link to="#" className="nav-link px-2">FAQs</Link></li>
                    <li><Link to="#" className="nav-link px-2">About</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to="/cart"><button type="button" className="btn btn-outline-dark top-cart"><i className="bi bi-cart2"></i></button></Link>
                    <Link to="/login"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
                    <Link to="/register"><button type="button" className="btn btn-primary">Register</button>
                    </Link>
                </div>

            </header>
        </div>
    );
}
