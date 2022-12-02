const year = 2032;
const holidays = ['01/06', '04/01', '12/25', '12/31', '2/29'] // formato MM/DD

// 01/06 es el 6 de enero, un viernes. Cuenta.
// 04/01 es el 1 de abril, un sábado. No cuenta.
// 12/25 es el 25 de diciembre, un lunes. Cuenta.

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año

/**
 * Función que calcula el número de horas extras que se realizan cuando un festivo cae en día laborable. (Por cada caso se suman 2 horas)
 * 
 * @param {Number} year 
 * @param {Array} holidays 
 * @returns Número de horas extras
 */
function countHours(year, holidays) {
    
    let hours = 0;

    holidays.forEach(holiday => {
        if (new Date(`${year}/${holiday}`).getDay() != 0 && new Date(`${year}/${holiday}`).getDay() <= 5){
            
            hours += 2;
        }
    })
  
    return hours;
}