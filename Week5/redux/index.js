const redux = require("redux")
const {combineReducers, createStore} = redux
const {tvShowReducer } = require("./tvShow")
const {movieReducer}  = require("./movie")



const rootReducer = combineReducers({
    tvShow: tvShowReducer,
    movie: movieReducer
})


const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store