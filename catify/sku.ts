function GenSKU() {
    return randomInteger(0,9) + " " + randomInteger(1000,9999) + " " + randomInteger(1000,9999) + " " + randomInteger;
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default GenSKU