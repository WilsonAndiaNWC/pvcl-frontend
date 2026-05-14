import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isSettingsOpen = false;
  isSecurityOpen = false;

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  toggleSecurity() {
    this.isSecurityOpen = !this.isSecurityOpen;
  }
}
