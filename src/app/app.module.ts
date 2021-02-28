import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteDetalleComponent } from './restaurante-detalle/restaurante-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    RestauranteDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
