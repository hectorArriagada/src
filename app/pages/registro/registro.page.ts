import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
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
    nombre: '',
    apellido: '',
    categoria: ''
  }

  constructor(private router: Router, 
    private auth: AuthService, 
    private toastController: ToastController) {}

  async registrar() {
    try {
      const res = await this.auth.registrar(this.user);
      const toast = await this.toastController.create({
        message: res ? 'Registrado con exito' : 'Error al registrar',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al registrar',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
  }

  ngOnInit() {}

  registrar2() {

  }
}
