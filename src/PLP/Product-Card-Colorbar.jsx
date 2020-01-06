import React from 'react';

function Colorbar(props){

    const showMoreButton = props.colorbar.imagepath.length >= 5 && <button className="show-more-colors-btn">+</button>;

    const colorBar = props.colorbar.imagepath.map((el,i)=>{
        return i === props.colorbar.imagepath.length-1 ? <div style={{display:"inline-block"}}><button className="product-colorbar-button" style={{backgroundColor: el}}></button>{showMoreButton}</div> : <button className="product-colorbar-button" style={{backgroundColor: el}}></button>
    })

    return (
        <div className="product-colorbar">
            {colorBar}
        </div>
    )
}

export default Colorbar;