import { Component } from '@angular/core';
import { Tabs } from './components/tabs/tabs';

@Component({
  selector: 'app-root',
  imports: [Tabs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
