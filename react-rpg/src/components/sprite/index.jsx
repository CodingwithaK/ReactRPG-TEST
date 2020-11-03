import React from "react"

export default function Sprite({image,data}) {
    //deconstruced into associated variables
const{y,x,h,w} = data
    return (
        <div
            style={{
                display:"inline-block",
                height:`${h}px`,
                width:`${w}px`,
                //string template of image prop
                backgroundImage:   `url(${image})`,
                backgroundRepeat: "no-repeat", 
                // starting point for height and width 
                backgroundPosition: `-${x}px -${y}px`,
        }}
        />
    )
}