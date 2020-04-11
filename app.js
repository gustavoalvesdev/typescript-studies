var message = 'Help me, Obi-Wan Kenobi. You\'re my only hope!';
console.log(message);
var episode = 4;
console.log("This is episode " + episode);
episode += 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite Droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " enough to  beat Millenium Falcon? " + isEnoughToBeatMF(distance));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
//# sourceMappingURL=app.js.map