const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);


/**
 * Función que envuelve todos los regalos
 * 
 * @param {Array} gifts 
 * @returns Array
 */
function wrapping(gifts) {
    
    let wrapped = [], wrapping = "", fila = 1;
    let wrappedTopBottom = "";

    for (let i = 0; i < gifts.length; i++) {
        
        fila = 1;
        wrappedTopBottom = wrappingTopBottom(gifts[i].length);
        
        // Dibujamos los regalos envueltos
        if(fila == 1){
            wrapping = wrappedTopBottom;
            fila += 1;
        }

        if(fila == 2){

            wrapping += wrappedGift(gifts[i]);
            fila += 1;
        }

        if (fila == 3) {
            wrapping += wrappedTopBottom;
            wrapped.push(wrapping);
        }

    } // Recorremos el array
    
    return wrapped;
}


/**
 * Función que realiza los asteríscos relacionados con la parte superior e inferior
 * 
 * @param {Integer} sizeGift 
 * @returns String
 */
function wrappingTopBottom(sizeGift){

    let wrapped = "";

    for (let index = 0; index < sizeGift + 2; index++) {
        
        wrapped += "*";    
    }

    return wrapped;
}

/**
 * Función que "envuelve" el regalo y le añade los saltos de líneas
 * 
 * @param {String} gift 
 * @returns String
 */
function wrappedGift (gift) {

    let wrapped = `\n*${gift}*\n`;

    return wrapped;
}