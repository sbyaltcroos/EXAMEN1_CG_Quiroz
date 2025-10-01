import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    ImageModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    FormsModule
  ],
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
      {label: 'Características', routerLink: '/home#caracteristicas'},
      {
        label: 'Proyectos',
        items: this.services.map(s => ({label: s.title, routerLink: '/details'}))
      },
      {label: 'Contacto', routerLink: '/details'}
    ];
  }

  onSearch(){
    alert('Buscando: ' + this.searchText);
  }
}
