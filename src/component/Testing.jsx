import React, { useState } from 'react';
import {useSwipeable,} from 'react-swipeable';

const Testing = () => {
    return (
        <div>
            <h1>Re-use Swipeable handlers </h1>
            <div
                {...useSwipeable({
                    onTouchEndOrOnMouseUp: () => console.log("touch red")
                })}
                style={{ backgroundColor: "red", height: "50px" }}
            ></div>
            <div
                {...useSwipeable({
                    onTouchEndOrOnMouseUp: () => console.log("touch green")
                })}
                style={{ backgroundColor: "green", height: "50px" }}
            ></div>
            <div
                {...useSwipeable({
                    onTouchEndOrOnMouseUp: () => console.log("touch blue")
                })}
                style={{ backgroundColor: "blue", height: "50px" }}
            ></div>
        </div>
    );
}; 

export default Testing;
