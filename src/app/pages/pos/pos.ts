import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf o [ngClass]
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [Sidebar, CommonModule],
  templateUrl: './pos.html',
})
export class Pos {
  tipoPlacaS1: 'Nacional' | 'Internacional' = 'Nacional';
  precioDieselBase = 6.96;
  precioDieselInt = 10.88;

  get precioActualS1(): number {
    return this.tipoPlacaS1 === 'Nacional' ? this.precioDieselBase : this.precioDieselInt;
  }

  setTipoPlacaS1(tipo: 'Nacional' | 'Internacional') {
    this.tipoPlacaS1 = tipo;
  }

  tipoPlacaS2: 'Nacional' | 'Internacional' = 'Nacional';
  precioGasolinaBase = 9.74;
  precioGasolinaInt = 14.68;

  get precioActualS2(): number {
    return this.tipoPlacaS2 === 'Nacional' ? this.precioGasolinaBase : this.precioGasolinaInt;
  }

  setTipoPlacaS2(tipo: 'Nacional' | 'Internacional') {
    this.tipoPlacaS2 = tipo;
  }
}
