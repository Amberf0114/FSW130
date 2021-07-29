import redux, {createStore} from "redux"


const contact0 = {
    name: 'John',
    phone: 1112223333,
    email: 'john@email.com'
}

export function addContact(info) {
    return{
        type: 'ADD_CONTACT',
        payload: info 
    }
}

export function removeContact(info) {
    return{
        type: 'REMOVE_CONTACT',
        payload: info 
    }
}

const initialState = {
    contactInfo : []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACT' :
            return {
                ...state,
                contactInfo : [...state.contactInfo, action.payload]
            }
        case 'REMOVE_CONTACT' :
                const updatedArr = state.filter(contact => contact !==
                action.payload)
                return updatedArr
                
        default :
            return state 
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState() ))

export default store

