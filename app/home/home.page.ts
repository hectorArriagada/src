import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  alertButtons = ['Salir'];

  user = {
    nombre: 'jano2',
    apellido: 'asdfasdf',
  };


  constructor(private router: Router, private storage: StorageService) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      user: any;
    };
    this.user.nombre = state.user;
  }
      
  ngOnInit() {
  }



  verStorage() {
    let nombre = this.storage.get(this.user.nombre)
    console.log("el nombre es " + nombre)
  }
  
  }
