import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../servicios/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  alertButtons = ['Salir'];

  user = {
    nombre: '',
    apellido: '',
  };

  constructor(private router: Router, private storage: StorageService) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      user: string;
    };
    if (state) {
      this.user.nombre = state.user;
    }
  }
      
  ngOnInit() {}

  async verStorage() {
    if (this.user.nombre) {
      try {
        const nombre = await this.storage.get(this.user.nombre);
        console.log("el nombre es " + nombre);
      } catch (error) {
        console.error("Error al obtener el nombre del storage", error);
      }
    } else {
      console.error("El nombre de usuario no está definido");
    }
  }
}
