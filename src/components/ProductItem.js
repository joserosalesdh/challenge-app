import React from 'react'
// import PropTypes from 'prop-types';

const GifGridItem = ({ name, photo, price, year }) => {

    const handleMouseOver = (e) => {
        e.preventDefault();
        console.log('pase por aca');
    }
    const style = {
        display: "none",
    }

    return (
        <div
            className="product__box"
            onMouseOver={handleMouseOver}

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
