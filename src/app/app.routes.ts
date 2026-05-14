import { Routes } from '@angular/router';
import { Pos } from './pages/pos/pos';
import { Login } from './pages/login/login';
import { Security } from './pages/security/security';
import { Inventory } from './pages/inventory/inventory'; // Importa la nueva clase
import { SettingsEmpresa } from './pages/settings-empresa/settings-empresa';
import { SettingsProductos } from './pages/settings-productos/settings-productos';
import { SettingsInfraestructura } from './pages/settings-infraestructura/settings-infraestructura';
import { SecurityUsuarios } from './pages/security-usuarios/security-usuarios';
import { SecurityLogs } from './pages/security-logs/security-logs';
import { Catalogos } from './pages/catalogos/catalogos';
import { SettingsConexion } from './pages/settings-conexion/settings-conexion';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'pos', component: Pos },
  { path: 'security', component: Security },
  { path: 'inventory', component: Inventory },

  { path: 'settings/empresa', component: SettingsEmpresa },
  { path: 'settings/productos', component: SettingsProductos },
  { path: 'settings/infraestructura', component: SettingsInfraestructura },
  { path: 'settings/conexion', component: SettingsConexion },

  { path: 'security/usuarios', component: SecurityUsuarios },
  { path: 'security/logs', component: SecurityLogs },

  { path: 'catalogos', component: Catalogos },

  { path: '**', redirectTo: '/login' },
];
