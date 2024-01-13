import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const serverSide = 'http://localhost:9000/'

export default function Home() {
    // Use State
    const [products, setProducts] = useState([{ key: 0 }])

    // Use Effect .. use effect starts after web page render 
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
            id={newCard.id}
            image={newCard.image}
            title={newCard.title}
            description={newCard.description}
            price={newCard.price}
        />
    }

    return (<>
        <div className="container">
            <section className='home-sec'>
                <h1 className='welc-header'>
                    Welcome to our official store 🎈 🥳
                </h1>
                <div className='row row-cols-1 row-cols-md-4 g-4' >
                    {products.map(createCards)}
                </div>
            </section>
        </div>
    </>);
};