console.log(Redux)

//REDUX
function startCount(time, mili, secs, mins, hours) {
    return{
        type: 'start',
        time: {time, mili, secs, mins, hours}
    }
}

function stopCount() {
    return{
        type: 'stop'
    }
}

function resetCount(time, mili, secs, mins, hours) {
    return {
        type: 'reset'
    }
}

function lapCount(time, mili, secs, mins, hours) {
    return{
        type: 'lap',
        time: {time, mili, secs, mins, hours}
    }
}

var stop;

function reducer(state = {hours: 0, minutes: 0, seconds: 0, miliseconds: 0}, action){
    switch(action.type) {
        case 'start':

            console.log('Action :', action)
 
            return{
                miliseconds: state.miliseconds >= 99    
                    ? 0 : state.miliseconds+1,
                seconds: state.seconds >=59 ? 0 :
                    state.miliseconds >=99 ?     //change this to 9 to speed up
                    state.seconds+1 : state.seconds,
                minutes: state.minutes >= 59 ? 0 :
                    state.seconds >=59 ?
                    state.minutes+1 : state.minutes,
                hours: state.hours >=59 ? 0 :
                    state.minutes >= 59 ? 
                    state.hours+1 : state.hours

                }

        case 'stop':
            clearInterval(stop)
            return state

        case 'reset' :
            return { 
                miliseconds: 0,
                seconds: 0,
                minutes: 0, 
                hours: 0
            }
        case 'lap' :
            return state

        default:
            return state 
    }
}

const store = Redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

//Start Event Listener
document.getElementById('start').addEventListener('click', () => {

    const stopWatch = document.getElementById('stopWatch')
    stopWatch.textContent =  `time: 
        ${store.getState().miliseconds} : 
        ${store.getState().seconds} : 
        ${store.getState().minutes} : 
        ${store.getState().hours}`

    stop = setInterval(()=> {

    store.dispatch(startCount())
    
    console.log(store.getState())

    stopWatch.textContent = `${store.getState().hours} : ${store.getState().minutes} : ${store.getState().seconds} : ${store.getState().miliseconds}`
    }, 10)

})

//Stop Event Listener
document.getElementById('stop').addEventListener('click', () => {

    store.dispatch(stopCount())
})

//Reset Event Listener
document.getElementById('reset').addEventListener('click', () => {

    store.dispatch(resetCount())

    stopWatch.textContent =  ` 
    ${store.getState().miliseconds} : 
    ${store.getState().seconds} : 
    ${store.getState().minutes} : 
    ${store.getState().hours}`
})

//Lap Event Listener
document.getElementById('lap').addEventListener('click', () => {

    store.dispatch(lapCount())
    var lap = document.createElement('h1')
    lap.textContent = `${store.getState().minutes} : ${store.getState().seconds} : ${store.getState().miliseconds}`
    document.body.appendChild(lap)
})