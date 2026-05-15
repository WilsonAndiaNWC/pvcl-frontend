import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../components/sidebar/sidebar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings-conexion',
  standalone: true,
  imports: [Sidebar, CommonModule],
  templateUrl: './settings-conexion.html',
})
export class SettingsConexion {
  verificarConexion() {
    Swal.fire({
      title: 'Sincronizando con ANH...',
      text: 'Verificando estado de transacciones pendientes en Middleware local.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      timer: 1500,
    }).then(() => {
      Swal.fire({
        title: 'Monitor de Transmisión ANH',
        width: '700px',
        html: `
          <div style="text-align: left; font-family: sans-serif;">
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 10px; font-weight: 900; color: #64748b; text-transform: uppercase;">Estado del Servicio</span>

              </div>

            </div>

            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px;">
              <span style="background-color: #dcfce7; color: #166534; font-size: 10px; font-weight: bold; padding: 2px 8px; border-radius: 99px;">SINCRONIZADO</span></div>
          </div>
        `,
        confirmButtonText: 'CERRAR MONITOR',
        confirmButtonColor: '#1e293b',
      });
    });
  }
}
