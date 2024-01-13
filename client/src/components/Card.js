
import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
    const [userIn, setStatus] = useState(false);

    return <div
        key={props.id}
        id={props.id}
        className={userIn ? "card text-bg-light" : "card"}
        onMouseEnter={() => setStatus(true)}
        onMouseLeave={() => setStatus(false)}
    >
    <Link className='product-link text-secondary-emphasis' to={`/product/${encodeURIComponent(JSON.stringify(props))}`}>
        <img src={props.image} className="card-img-top" alt="..." ></img>
        <div className="card-body">
            <h5 className="card-title prod-title" >{props.title}</h5>
            <h4 className="text-center">{props.price} EGP</h4>
            <p className="card-text prod-desc">{props.description}</p>
            <button type="button" className="btn btn-outline-dark cart-btn">add to cart <i className="bi bi-cart-plus"></i></button>
        </div>
        </Link>
    </div>;
}

export default Card;
