import React from 'react'
import animals from './animals'

const {Provider, Consumer} = React.createContext()

function Context(props) {
    return(
        <Provider value = {{animals}} >
            {props.children}
        </Provider>
    )
}

export { Context, Consumer }