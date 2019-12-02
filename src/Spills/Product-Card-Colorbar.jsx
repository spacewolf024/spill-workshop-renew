import React from 'react';

function Colorbar(props){

    const colorBar = props.colorbar.imagepath.map((el)=>{
        return <button className="product-colorbar-button" style={{backgroundColor: el}}></button>
    })

    const showMoreButton = props.colorbar.imagepath.length >= 12 ? <button className="show-more-colors-btn">+</button> : ''

    return (
        <div className="product-colorbar">
            {colorBar}{showMoreButton}
        </div>
    )
}

export default Colorbar;