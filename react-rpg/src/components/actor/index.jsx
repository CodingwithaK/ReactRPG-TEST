import React from "react"
import Sprite from "../sprite"
// step is which step in the animation it is at , dir is direction of sprite
export default function Actor({sprite, data, step = 0, dir = 0}){
const {h, w} = data
    return (
        <Sprite
        image={sprite}
        data={{
          x:step * w,
          y:dir * h,
          //value of w and h come from destructured data
          w,
          h,
        }}
       
       />
    )
}