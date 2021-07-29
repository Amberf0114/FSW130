export function addTvShow(show) {
    return {
        type: "ADD_TV_SHOW",
        payload: show
    }
}

export function removeTvShow(show) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: show
    }
}

export function tvShowReducer(shows = [], action) {
    switch(action.type) {
        case "ADD_TV_SHOW" :
            return [...shows, action.payload]
       
        case "REMOVE_TV_SHOW" :
            const updatedArr = shows.filter(show => show.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
        

        default:
            return shows
    }
}


export default tvShowReducer