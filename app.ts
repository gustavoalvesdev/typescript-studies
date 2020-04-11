let message : string = 'Help me, Obi-Wan Kenobi. You\'re my only hope!'
console.log(message)

let episode: number = 4
console.log(`This is episode ${episode}`)
episode += 1
console.log(`Next episode is ${episode}`)

let favoriteDroid
favoriteDroid = 'BB-8'
console.log(`My favorite Droid is ${favoriteDroid}`)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} enough to  beat Millenium Falcon? ${isEnoughToBeatMF(distance)}`)