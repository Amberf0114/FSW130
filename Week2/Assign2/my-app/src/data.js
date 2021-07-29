
let uglythings = {
    userData: [{
        title : "The Blob",
        imgUrl : "...",
        description : 'The blob is a sea creature and thats enough said.'
    }],

    addObject: add
}


function add(changes){
    console.log(changes)
    uglythings.userData.push(changes)

    console.log(uglythings.userData)

}

export {uglythings}