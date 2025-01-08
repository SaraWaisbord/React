import React from 'react';

function ImgComponent(props){
    const imgStyle = {

        width: '25%',
        height: '20%',
        border: '5px solid #ccc',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        objectFit: 'cover',
        margin: '50px',
    };

    return <img src={props.path} alt="react's imgs:)" style={imgStyle} />;
}

export default ImgComponent;
