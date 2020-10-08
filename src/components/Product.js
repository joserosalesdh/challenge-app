import React from 'react';
import ProductItem from './ProductItem';
import './product.css';
import { useRequest } from '../hooks/useRequest';

const Product = () => {

    const { data, isLoaded, error } = useRequest(`https://challenge.agenciaego.tech/models#`);

    // const deMenorAMayorPrecio = data.sort((a, b) => {
    //     return (a.price - b.price)
    // })
    // console.log(deMenorAMayorPrecio);

    // const deMayorAMenorPrecio = data.sort((a, b) => {
    //     return (b.price - a.price)
    // })
    // console.log(deMayorAMenorPrecio);

    // const masNuevosPrimero = data.sort((a, b) => {
    //     return (b.year - a.year)
    // });
    // console.log(masNuevosPrimero);

    const masViejosPrimero = data.sort((a, b) => {
        return (a.year - b.year)
    });
    console.log(masViejosPrimero);

    return (
        <>

            <div className="container">

                <section className="container__box">
                    <h1>Descubri todos los modelos</h1>
                    <div className="container__box-grid">
                        {/* <h4 className="container__box-grid--left">Filtrar por <a><i className="fas fa-chevron-down"></i></a> </h4>
                        <h4 className="container__box-grid--right">Ordenar por <a><i className="fas fa-chevron-down"></i></a></h4> */}
                        <select className="container__box-grid--left">
                            <option value="Todos">Filtrar por</option>
                            <option value="Autos">Autos</option>
                            <option value="Pickups">Pickups</option>
                            <option value="SUVs y Crossovers">SUVs y Crossovers</option>
                        </select>
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
