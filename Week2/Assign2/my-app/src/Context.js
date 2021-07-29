import React from "react"
import { Component, useState } from "react"

const {Provider, Consumer} = React.createContext()

    function DataProvider(props) {
    let [uglythings, setUglyThings] = useState(
        [{
            title : "The Blob",
            imgUrl : "...",
            description : 'The blob is a sea creature and thats enough said.'
       }]
       )
       
       function add(object, changes){
        setUglyThings([...uglythings, changes])
    }

            return(
                <Provider value={{addObject: add, uglythings}}>
                    {props.children}
                </Provider>
            )
}

export {Consumer, DataProvider}