import redux, {createStore} from "redux"

export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export function removeMovie(movie) {
    return {
        type: 'REMOVE_MOVIE',
        payload: movie
    }
}

export function movieReducer(movies = [], action) {
    switch(action.type) {
        case 'ADD_MOVIE' :
            return [...movies, action.payload]
        
        case 'REMOVE_MOVIE' :
            const updatedArr = movies.filter(movie => movie.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
        
        
        default :
            return movies
    }
}


export default movieReducer