import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = '';

  userpsw = {
    clave1: '',
    clave2: '',
    mensaje: '',
  }

  validarPsw() {
    if (this.userpsw.clave1.length != 0) {
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
