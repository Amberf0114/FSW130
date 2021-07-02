const redux = require('redux')

function changeCount(amount = 1) {
    return{
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing) {
    return{
        type:"ADD_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThing(thing){
    return{
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

const initialState = {
    count: 0,
    favoriteThings: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT" :
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING" : 
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case"REMOVE_FAVORITE_THING" :{
            const arrCopy = [...state.favoriteThings] //used for more complex code to manipulate before...

            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !==
            action.payload.toLowerCase())
            return{
                ...state,
                favoriteThings: updatedArr //...setting the state equal to the manipulated state
            }} //second brace so I can reuse arrCopy var name
        default :
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount(5))
store.dispatch(addFavoriteThing("Jasper"))
store.dispatch(addFavoriteThing('kitty'))
store.dispatch(removeFavoriteThing('kitty'))