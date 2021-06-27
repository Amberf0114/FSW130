console.log(Redux)
//functions to make buttons work && REDUX code && Button component code

//REDUX
function startCount() {
    return{
        type: 'start'
    }
}

function stopCount() {
    return{
        type: 'stop'
    }
}

function reducer(state = {count : setInterval(0)}, action){
    switch(action.type) {
        case 'start':
            console.log('firing...')
            return{
                    count: state.count++
                }
        case 'stop':
            return {
                count: state.count
            }
        case 'clear' :
            return {
                count: state.count = setInterval(0)
            }
    }
}

const store = Redux.createStore(reducer())
store.subscribe(() => {
    console.log(store.getState())
})

document.getElementById('start').addEventListener('click', (e) => {
    const stopWatch = document.createElement('h1')
    stopWatch.textContent = store
    document.appendChild(stopWatch)

    e.store.dispatch(startCount())
})