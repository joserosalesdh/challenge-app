import React from 'react'
// import PropTypes from 'prop-types';

const GifGridItem = ({ name, photo, price, year }) => {

    return (
        <div className="product__box">

            <h2> {name} </h2>
            <p>{year} | ${price}</p>
            <img src={photo} alt="Foto de auto" />

        </div>
    )
}

// GifGridItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// }
{/* <img src="images/pngocean.com.png" alt="Foto de auto" /> */ }

export default GifGridItem
