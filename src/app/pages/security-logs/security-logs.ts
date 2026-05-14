import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-security-logs',
  imports: [Sidebar],
  templateUrl: './security-logs.html',
  styleUrl: './security-logs.scss',
})
export class SecurityLogs {}
