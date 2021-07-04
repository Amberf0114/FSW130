const redux = require('redux')

//fake data
const contact0 = {
    name: 'John',
    phone: 1112223333,
    email: 'john@email.com'
}

const contact1 = {
    name: 'Sylvester',
    phone: 1112223333,
    email: 'sill@email.com'
}

const contact2 = {
    name: 'Modene',
    phone: 1112223333,
    email: 'catlover@email.com'
}

//redux
function addContact(info) {
    return{
        type: "ADD_CONTACT",
        payload: info
    }

}

function removeContact(info) {
    return{
        type: "REMOVE_CONTACT",
        payload: info
    }
}

const initialState = {
    contactInfo : []
}
function reducer(state = initialState , action) {
    switch(action.type){
        case "ADD_CONTACT" :
            return{
                ...state,
                contactInfo: [...state.contactInfo, action.payload]
            }
        case "REMOVE_CONTACT" :

        const updatedArr = state.contactInfo.filter(contact => contact !==
            action.payload)

            return {
                ...state,
                contactInfo: updatedArr
            }
        default :
              return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact(contact0))
store.dispatch(addContact(contact1))
store.dispatch(removeContact(contact0))