import React from 'react';
import './body.css'
import Product from './Product';

const Body = () => {
    return (
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
                <Product />
            </section>

        </div >
    )
}

export default Body
