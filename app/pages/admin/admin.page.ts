import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { StorageService } from '../../servicios/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  users: any[] = []

  constructor( private api: ApiService, private storage: StorageService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }


  agregarUsuario() {
    this.api.postUser
    
  }

  cargarUsuarios() {
    this.api.getUser().subscribe(
      (data) => {
        this.users = data
        console.log(data)
      },
      (error) => {
        console.log("Error en la llamada :" + error)
      });
  }

  modificarUsuario(id: any) {

  }

  eliminarUsuario(id: any) {
    this.api.deleteUser(id).subscribe(
      (data) => {
        id = data[0];
        console.log(id);
      }
    )
  }

}
