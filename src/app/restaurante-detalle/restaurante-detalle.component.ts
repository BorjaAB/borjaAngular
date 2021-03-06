import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante'

@Component({
  selector: 'app-restaurante-detalle',
  templateUrl: './restaurante-detalle.component.html',
  styleUrls: ['./restaurante-detalle.component.css'],
})
export class RestauranteDetalleComponent implements OnInit {

  @Input() restaurante! : Restaurante;
  
  constructor() { }

  ngOnInit(): void {
  }

}
