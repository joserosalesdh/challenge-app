import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css';

const Product = () => {

    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const url = "https://challenge.agenciaego.tech/models#";

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setIsLoaded(true);

            try {
                const result = await axios(url);

                setData(result.data);
            } catch (error) {
                setError(true);
            }

            setIsLoaded(false);
        };

        fetchData();
    }, [url]);



    return (
        <>

            {error && <div>Something went wrong ...</div>}

            {isLoaded ? (
                <div>Loading...</div>
            ) : (
                    <ul>
                        {data.map(item => (
                            <li key={item.name}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}

        </>
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
