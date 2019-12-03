import React from 'react';

function Colorbar(props){

    const colorBar = props.colorbar.imagepath.map((el, index)=>{
        return <button className="product-colorbar-button" key={index} style={{backgroundColor: el}}></button>
    })

    return (
        <div className="product-colorbar">
            {colorBar}
        </div>
    )
}

export default Colorbar;