import React, { useEffect, useState } from 'react';
import './product.css';

const Product = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://challenge.agenciaego.tech/models#")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.models);
                    console.log(result)
                    console.log(result.models)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    return (
        <h1>Hola Mundo</h1>
        // <ul>
        //     {items.map(item => (
        //         <li key={item.name}>
        //             {item.name} {item.price}
        //         </li>
        //     ))}
        // </ul>
    );
}


// return (

//     <div className="product__box">
//         {

//         }
//         <h2>Etios</h2>
//         <p>2019 | $815.900</p>
//         <img src="images/pngocean.com.png" alt="Foto de auto" />
//     </div>


// )
// }

// }

export default Product
