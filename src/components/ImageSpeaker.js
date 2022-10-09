import React from "react";

function ImageSpeaker({ img }) {
    return (
        <div className='image'>
            <img alt='' src={img} />
        </div>
    );
}

export default ImageSpeaker;