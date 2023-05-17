import { Component } from '@angular/core';

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
}
