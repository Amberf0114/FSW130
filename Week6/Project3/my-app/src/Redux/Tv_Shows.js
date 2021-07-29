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

export function tvShowReducer(show = [], action) {
    switch(action.type) {
        case "ADD_TV_SHOW" :
            return [...show, action.payload]
       
        case "REMOVE_TV_SHOW" :
            const updatedArr = show.filter(shows => shows.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
        

        default:
            return show
    }
}


export default tvShowReducer