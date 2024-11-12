import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user = {
    username: '',
    password: '',
  }

  constructor(private router: Router, 
    private auth: AuthService, 
    private toastController: ToastController) {

    }
  

  async registrar() {
    this.auth
      .registrar(this.user)
      .then((res) => {
        console.log(this.user);
        console.log(res)
        return this.toastController.create({
          message: 'Registrado con exito',
          duration: 3000,
          position: 'bottom',
        });
      })
      .then((toast) => toast.present())
      .catch((error) => {
        return this.toastController
          .create({
            message: 'Error al registrar',
            duration: 3000,
            position: 'bottom',
          })
          .then((toast) => toast.present());
      });
  }

  ngOnInit() {
  }

  registrar2() {

  }
}
