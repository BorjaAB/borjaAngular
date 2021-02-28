import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RESTAURANTES } from '../mock-restaurantes';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurantes = RESTAURANTES;
  restauranteSeleccionado! : Restaurante;

  seleccionarRestaurante(restaurante:Restaurante):void{
    this.restauranteSeleccionado = restaurante;
  }

  constructor() { }

  ngOnInit(): void{
  }

}
