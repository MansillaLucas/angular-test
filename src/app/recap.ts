// Si bien este curso es acerca de Angular, es necesario saber ciertas cosas básicas acerca de Typescript.
// Typescript es el lenguaje principal el cuál Angular usa para programar sus funcionalidades. Es un lenguaje similar a
// Javascript con la particularidad de que vamos a poder agregar tipos a nuestros datos y variables, haciendolos menos 
// propensos a que tengan problemas que vienen a raíz del tipado de datos.

const userName:string = 'Lucas';
const sum = (a:number, b:number):number => {
    return a+b;
}

// A este punto, poner un valor que no sea numérico dentro de la función nos tira una advertencia preventivamente.
// Esto nos ahorra tiempo, ya que este aviso se muestra antes de compilarlo.
sum(1,5);

// Podemos de la misma forma que en otros idiomas crear clases.
class Person{

    // Aquí rápidamente define el constructor junto con los parametros de la clase.
    constructor(public age:number, public firstName:string){}

}

const lucas = new Person(27,userName);