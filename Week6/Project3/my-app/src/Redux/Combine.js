const redux = require("redux")
const {combineReducers, createStore} = redux
const {tvShowReducer } = require("./Tv_Shows")
const {movieReducer}  = require("./Movies")



const rootReducer = combineReducers({
    tvShow: tvShowReducer,
    movie: movieReducer
})


const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store