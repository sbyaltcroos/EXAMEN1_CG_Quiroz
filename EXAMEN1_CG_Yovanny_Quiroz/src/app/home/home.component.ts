import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText = '';
  menuItems: MenuItem[];

  services = [
    {
      title: 'Desarrollo de software a la medida',
      desc: 'Soluciones personalizadas para tu negocio.',
      img: 'assets/service1.png'
    },
    {
      title: 'Desarrollo Móvil',
      desc: 'Aplicaciones móviles nativas e híbridas.',
      img: 'assets/service2.png'
    },
    {
      title: 'Soporte a aplicaciones',
      desc: 'Mantenimiento y soporte continuo.',
      img: 'assets/service3.png'
    }
  ];

  constructor(){
    this.menuItems = [
      {label: 'Inicio', routerLink: '/home'},
      {label: 'Caracteristicas', routerLink: '/home#caracteristicas'},
      {label: 'Proyectos', items: this.services.map(s => ({label: s.title, command: ()=>{ window.location.href = '/details'; }}))},
      {label: 'Contacto', routerLink: '/details'}
    ];
  }

  onSearch(){
    alert('Buscar: ' + this.searchText);
  }
}
