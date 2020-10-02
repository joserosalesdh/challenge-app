import React from 'react'
import { useState } from 'react';
// import PropTypes from 'prop-types';

const GifGridItem = ({ name, photo, price, year }) => {

    const [display, setDisplay] = useState("none");
    const [color, setColor] = useState("#000000");

    const handleMouseOver = (e) => {
        e.preventDefault();
        setDisplay('inline');
        setColor("#FF0000");
    }

    const handleOut = (e) => {
        e.preventDefault();
        setDisplay('none');
        setColor('#000000');
    }


    const style = {
        display: display,
        animationDuration: "1.5s"
    }

    const h2Style = {
        color: color
    }

    return (
        <div
            className="product__box"
            onMouseOver={handleMouseOver}
            onMouseOut={handleOut}
        >

            <h2 style={h2Style}> {name} </h2>
            <p>{year} | ${price}</p>
            <img src={photo} alt={name} />
            <button
                type="button"
                className="btn btn-dark animate__animated animate__fadeInDown"
                style={style}
            >
                Ver Modelo
            </button>

        </div>
    )
}

// GifGridItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// }
{/* <img src="images/pngocean.com.png" alt="Foto de auto" /> */ }

export default GifGridItem
