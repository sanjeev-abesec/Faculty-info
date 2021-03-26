import React from 'react';

const Profilepicture = (props) => {
    const {url, width = "130px", height = "130px" } = props;
    return (
        <div style  = {{width, height, margin: "auto"}}>
            <img src = {url} alt = "user" className = "crad-img-top rounded-circle" />
        </div>
    )
}

export default Profilepicture
