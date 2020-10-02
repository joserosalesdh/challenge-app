import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
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
                console.log(error)
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

                    <>
                        {
                            data.map(item => (
                                <ProductItem
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                    </>

                )}

        </>
    )

}

export default Product
