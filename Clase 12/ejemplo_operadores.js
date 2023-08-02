/*
hacer la operacion (usar los operadores) para que compare que el dia de la semana sea Lunes y que el clima sea distinto a "soleado".
*/

// - operadores logicos (&&)
// - operadores de comparacion ( igual  === y el distinto !==)

let dia="Lunes";
let clima="soleado";

dia === "Lunes" && clima !== 'soleado' // false

// otra manera mas...

dia === "Lunes" && (clima === 'lluvioso' || clima === 'nublado' || clima === 'ventoso' )//false


// otra manera

//diaSem === dia && clima !== climaDia //false

let diaSem="Lunes"
let climaDia="soleado"

