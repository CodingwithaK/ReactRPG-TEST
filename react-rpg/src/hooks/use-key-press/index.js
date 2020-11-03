import {useEffect} from "react"

export default function useKeyPress(fn){
    useEffect(()=>{
        window.addEventListener("keydown",fn)
        //prevents memory leak
        return ()=> window.removeEventListener("keydown",fn)
    },[fn]
    )
}