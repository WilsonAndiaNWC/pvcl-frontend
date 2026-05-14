import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  imports: [Sidebar, CommonModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss',
})
export class Inventory {
  selectedTank: string = 'T-01';

  selectTank(tankId: string) {
    this.selectedTank = tankId;
  }
}
