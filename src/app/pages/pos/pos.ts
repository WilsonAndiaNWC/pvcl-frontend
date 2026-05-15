import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../components/sidebar/sidebar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [Sidebar, CommonModule],
  templateUrl: './pos.html',
})
export class Pos {
  tipoPlacaS1: 'Nacional' | 'Internacional' = 'Nacional';
  precioDieselBase = 3.72;
  precioDieselInt = 8.88;

  get precioActualS1(): number {
    return this.tipoPlacaS1 === 'Nacional' ? this.precioDieselBase : this.precioDieselInt;
  }

  setTipoPlacaS1(tipo: 'Nacional' | 'Internacional') {
    this.tipoPlacaS1 = tipo;
  }

  bsisaLoadingS1 = false;
  bsisaDataS1: any = null;

  buscarBsisaS1(event: any) {
    const valorDigitado = event.target.value.toUpperCase().replace(/\s/g, '');

    if (valorDigitado !== '1414WFA') {
      this.bsisaLoadingS1 = true;
      this.bsisaDataS1 = null;

      setTimeout(() => {
        this.bsisaLoadingS1 = false;
        this.bsisaDataS1 = {
          propietario: 'TRANSPORTES EL RÁPIDO S.R.L.',
          estado: 'VIGENTE',
          cupo: 500.0,
        };

        Swal.fire({
          title: 'VALIDADO',
          html: `
            <div style="text-align: left; font-family: sans-serif;">


              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; text-align: center;">
                <p style="color: #047857; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Cupo Disponible</p>

              </div>
            </div>
          `,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#10b981',
          allowOutsideClick: false,
        });
      }, 800);
    } else {
      this.bsisaDataS1 = null;
      this.bsisaLoadingS1 = false;
    }
  }

  tipoPlacaS2: 'Nacional' | 'Internacional' = 'Nacional';
  precioGasolinaBase = 3.74;
  precioGasolinaInt = 8.68;

  get precioActualS2(): number {
    return this.tipoPlacaS2 === 'Nacional' ? this.precioGasolinaBase : this.precioGasolinaInt;
  }

  setTipoPlacaS2(tipo: 'Nacional' | 'Internacional') {
    this.tipoPlacaS2 = tipo;
  }
}
