import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import './product.css';

const Product = () => {



    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const url = `https://challenge.agenciaego.tech/models#`;

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

            <div className="container">

                <section className="container__box">
                    <h1>Descubri todos los modelos</h1>
                    <div className="container__box-grid">
                        <h4 className="container__box-grid--left">Filtrar por <a><i className="fas fa-chevron-down"></i></a> </h4>
                        <h4 className="container__box-grid--right">Ordenar por <a><i className="fas fa-chevron-down"></i></a></h4>
                    </div>
                </section>
                <hr />

                <section className="container__product">
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
                </section>

            </div >
            <footer>
                <div className="footer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt quae autem, dolor sed in culpa
                    unde tempora aspernatur sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </footer>



        </>
    )

}

export default Product
