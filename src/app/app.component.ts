import { Component } from '@angular/core';
import {Product} from './product.model'
// Es necesario importar las librerías necesarias para que funcionen.

// Este metadato especificado en esta parte le indica a Angular las configuraciones de este componente, 
// como también los archivos que usa para renderizarlo, ya sea su estructura mediante el html o sus
// estilos mediante el archivo css.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Estos son atributos que se van a exportar al template, son necesarios si se quiere renderizar un dato en particular.
  // Las variabes que no especifiquen un nivel de acceso, se considerarán inmediatamente públicas.
  name = 'Lucas';
  age = 27;
  imgSource = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1539&q=80';
  btnDisabled = true;
  person = {
    name: 'Carlos',
    age: 34
  }
  newWord = '';
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚']
  widthImg=100;
  box = {
    width:100,
    height:100,
    background: 'red'
  }
  form = {
    username:'',
    email:'',
    password:''
  }
  // Al asignar una interfaz a un atributo podemos especificarle los atributos que tiene habilitado para su uso.
  // Esto quiere decir que si a un objeto dentro de este arreglo le ponemos un atributo de más que no esté presente
  // en la interfaz Product, nos va a tirar un aviso de que es un atributo invalido.

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(e: Event) {
    const elem = e.target as HTMLElement;
    console.log(elem.scrollTop);
  }

  changeName(e: Event){
    const elem = e.target as HTMLInputElement;
    this.person.name = elem.value;
  }

  addSomething(){
    this.emojis.push(this.newWord);
    this.newWord = '';
  }

  deleteSomething(index:number){
    this.emojis.splice(index,1);
  }

}
