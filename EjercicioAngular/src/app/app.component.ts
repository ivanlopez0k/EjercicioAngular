import { Component } from '@angular/core';
import { IProduct } from './interface/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EjercicioAngular';
  productList : IProduct[] = [{
    nombre: "Prueba1",
    costo: "100"
  },{
    nombre: "Prueba2",
    costo: "200"
  },{
    nombre: "Prueba3",
    costo: "300"
  },{
    nombre: "Prueba4",
    costo: "400"
  }
  /* Aca se agregan mas objetos */
  ];
  
  buttonStatus: boolean = true
  changeStatus(){
    if(!this.buttonStatus){
      this.buttonStatus = true
    } else{
      this.buttonStatus = false
    }
  }
}
