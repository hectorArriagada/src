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

  ngAfterContentInit() {
    this.animarLogin();
  }

  animarLogin() {
    const loginIcon = document.querySelector(".logo") as HTMLElement;
    const animacion = this.animationController.create()
      .addElement(loginIcon)
      .duration(4000)
      .iterations(Infinity)
      .keyframes([
        {offset: 0, opacity: '1', width: "200px", height: "200px"},
        {offset: 0.5, opacity: '0.5', width: "150px", height: "150px"},
        {offset: 1, opacity: '1', width: "200px", height: "200px"},
      ]);
      animacion.play();
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

  cambiarClave() {
    if (this.user.usuario.length != 0) {
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.user.usuario,
        },
      };

      this.router.navigate(['/registro'], navigationExtras);

    } else {
      this.mensaje = 'Ingrese su usuario';
    }
  }


  ngOnInit() {
  }

  
}
