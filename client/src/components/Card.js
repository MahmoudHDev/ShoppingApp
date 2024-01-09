export default function Card(props) {
    return <div className="card ">
        <img src={props.image} className="card-img-top" alt="..." ></img>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-body-secondary">price: {props.price} L.E</small></p>
            <button type="button" className="btn btn-outline-light">add to cart</button>
        </div>
    </div>;
}

