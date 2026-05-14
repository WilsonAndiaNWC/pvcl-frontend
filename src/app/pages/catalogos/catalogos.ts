import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-catalogos',
  imports: [Sidebar],
  templateUrl: './catalogos.html',
  styleUrl: './catalogos.scss',
})
export class Catalogos {}
