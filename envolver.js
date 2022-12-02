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
    
    let wrapped = [];
    let wrappedTopBottom = "";

    gifts.forEach(gift =>{
        wrapped.push(`${gift.replace(/./g, "*")}**\n*${gift}*\n**${gift.replace(/./g, "*")}`);
    }) // Recorremos el array
    
    return wrapped;
}