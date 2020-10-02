import React from 'react'
import { useState } from 'react';
// import PropTypes from 'prop-types';

const GifGridItem = ({ name, photo, price, year }) => {

    const [display, setDisplay] = useState("none");

    const handleMouseOver = (e) => {
        e.preventDefault();
        setDisplay('inline')
    }
    // const handleOnBlur = (e) => {
    //     e.preventDefault();
    //     setDisplay(display)
    // }

    const style = {
        display: display,
    }

    return (
        <div
            className="product__box"
            onMouseOver={handleMouseOver}
        // onBlur={handleOnBlur}
        >

            <h2> {name} </h2>
            <p>{year} | ${price}</p>
            <img src={photo} alt={name} />
            <button
                type="button"
                className="btn btn-dark"
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
