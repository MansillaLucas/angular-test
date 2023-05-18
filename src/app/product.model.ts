// Esto es una interfaz. Esta interfaz da una estructura para que los atributos puedan especificar una serie de objetos dentro,
// los cuales deben seguir esta estructura. Funcionaría de una forma similar a una clase.
// Agregar un signo de preguntas al lado de un atributo significa que el mismo será opcional.
export interface Product {
    name: string,
    price: number,
    image: string,
    category?:string
}