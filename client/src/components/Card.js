import $ from "jquery"
import '../App.css';
export default function Card(props) {



    return <div className="card ">
        <img src={props.image} className="card-img-top" alt="..." ></img>
        <div className="card-body">
            <h5 className="card-title prod-title" >{props.title}</h5>
            <h4 className="text-center">{props.price} EGP</h4>
            <p className="card-text prod-desc">{props.description}</p>
            <button type="button" className="btn btn-outline-light cart-btn">add to cart <i className="bi bi-cart-plus"></i></button>
            
        </div>
    </div>;
}

