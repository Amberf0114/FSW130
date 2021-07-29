import redux, {createStore} from "redux"



export function addFood(info) {
    return{
        type: 'ADD_FOOD',
        payload: info 
    }
}

export function removeFood(info) {
    return{
        type: 'REMOVE_FOOD',
        payload: info 
    }
}

const initialState = {
    foodInfo : []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_FOOD' :
            return {
                ...state,
                foodInfo : [...state.foodInfo, action.payload]
            }
        case 'REMOVE_FOOD' :
                const updatedArr = state.foodInfo.filter(food => food !==
                action.payload)
                return {
                    ...state,
                    foodInfo : updatedArr
                }
                
        default :
            return state 
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState() ))

export default store

// const mapStateToProps = state => {
//     console.log(state)
//     return(state)
//   }
  
//   export default connect( mapStateToProps)(MoviesMap);