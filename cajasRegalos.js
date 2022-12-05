const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)) // 2


/**
 * Devuelve el número de paquetes que puede transportar según su peso (longitud del regalo) y del peso máximo que puede soportar (longitud de los renos *2).
 * 
 * @param {Array} packOfGifts 
 * @param {Array} reindeers 
 * @returns {Number}
 */
function distributeGifts(packOfGifts, reindeers) {

    return Math.trunc(((reindeers.toString().length - reindeers.length + 1) * 2) / (packOfGifts.toString().length - packOfGifts.length + 1));
}