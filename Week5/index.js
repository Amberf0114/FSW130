const store = require('./redux')
const  { addMovie } = require('./redux/movie')
const  { addTvShow } = require('./redux/tvShow')

store.dispatch(addMovie('Juno'))
store.dispatch(addTvShow('Rick and Morty'))
store.dispatch(addMovie('Interview With the Vampire'))


