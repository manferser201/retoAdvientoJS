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
    
    let wrapped = [], wrapping = "";
    let wrappedTopBottom = "";

    for (let i = 0; i < gifts.length; i++) {
        
        wrappedTopBottom = wrappingTopBottom(gifts[i].length);
        wrapped.push(`${wrappedTopBottom}\n*${gifts[i]}*\n${wrappedTopBottom}`);

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