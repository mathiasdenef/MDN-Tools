import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items!: MenuItem[];


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['']
        // icon: 'pi pi-home'
      },
      {
        label: 'Calculations',
        items: [
          { label: 'Werkelijke kost auto', routerLink: ['calculation', 'werkelijke-kost-auto'] },
          // { label: 'Quit' }
        ]
      }
    ];
  }
}
