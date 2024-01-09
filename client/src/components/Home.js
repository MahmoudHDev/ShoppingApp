import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';


const serverSide = 'http://localhost:9000/'


export default function Home() {
    // Use State
    const [products, setProducts] = useState([{}])

    // Use Effect

    useEffect(() => {
        async function apiCall() {
            try {
                const apiRes = await axios.get(serverSide);
                const theData = apiRes.data;
                setProducts(theData)
            } catch (error) {
                console.log(`Error Has been occured while getting data ${error}`);
            }
        }
        apiCall()
    }, []) // Empty dependency array to execute only once (on component mount)

    function createCards(newCard) {
        return <Card
            key={newCard.id}
            image={newCard.image}
            title={newCard.title}
            description={newCard.description}
            price={newCard.price}
        />
    }


    return <>
        <div className="container">
            <h1>
                Welcome to our official store
            </h1>
            <div className="card-group">
            </div>

            {products.map(createCards)}
            {console.log("Site has been rendered")}

        </div>

    </>
}