import { useParams } from "react-router-dom"

export default function Product() {

    const { encodedProps } = useParams();
    const product = JSON.parse(decodeURIComponent(encodedProps));

    return <div className="container" style={{ marginTop: "7%" }}>

        <h1>Product details</h1>
        <hr style={{marginBottom:"3rem"}}></hr>
        <div className="contianer-fluid d-flex justify-content-center">
            <div className="card mb-3 border-0 " style={{ maxWidth: "100%", cursor: "default" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p className="card-text">{product.description}</p>
                            <h4 className="text-left">{product.price} EGP</h4>
                            <button type="button" className="btn btn-outline-dark cart-btn">add to cart <i className="bi bi-cart-plus"></i></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

