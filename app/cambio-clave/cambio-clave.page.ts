import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {

  usuario = '';

  userpsw = {
    clave1: '',
    clave2: '',
    mensaje: '',
  }

  validarPsw() {
    if (this.userpsw.clave1.length <= 8) {
      if (this.userpsw.clave1 === this.userpsw.clave2) {
        this.userpsw.mensaje = 'Cambio exitoso';
      } else {
        this.userpsw.mensaje = 'Contraseña no coincide';
      }
    } else {
      this.userpsw.mensaje = 'Los campos no pueden estar vacios';
    }
  }

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
