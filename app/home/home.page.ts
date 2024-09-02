import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  alertButtons = ['Salir'];

  usuario = '';
  user = {
    nombre: '',
    apellido: '',

  };

  constructor(private router: Router) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      usuario: '';
      clave: '';
    };
    this.usuario = state.usuario;
  }
      
  ngOnInit() {
  }
  
  }
