import { Component } from '@angular/core';

@Component({
  selector: 'arz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Der Titel der Veranstaltung
   */
  title = 'TypeScript und Angular für das ARZ';
}
