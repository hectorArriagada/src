import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',  
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /* objeto JSON para el usuario */
  user = {
    usuario: '',
    clave: '',
  };

  /* mensaje de respuesta */
  mensaje = '';

  /* estado de carga */
  spinner = false;



  constructor(private router: Router, private animationController: AnimationController) {}

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  validar() {
    if (this.user.usuario.length != 0) {
      if (this.user.clave.length != 0) {
        //funciona
        this.mensaje = 'Conexión Exitosa!';
        let navigationExtras: NavigationExtras = {
          state: {
            usuario: this.user.usuario,
            clave: this.user.clave,
          },
        };

        this.cambiarSpinner();
        setTimeout(() => {
          this.router.navigate(['/home'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = "";
        }, 1);

      } else {
        this.mensaje = 'Contraseña vacía';
      }
      
    } else {
      this.mensaje = 'Usuario vacío';
    }
  }


  ngOnInit() {
  }

  
}
