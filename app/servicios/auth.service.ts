import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estadoConeccion: boolean = false;
  
  constructor(private storage: StorageService) { }

  loginBD(user: string, pass: String): Promise<boolean> {
    // se obtiene un Promise con 1 valor, resuelto o no resuelto
    return this.storage
      .get(user)
      .then((res) => {
        // si funciona, me devuelve el user completo
        if (res.password == pass) {
          this.estadoConeccion = true;
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log('Error en el sistema' + error);
        return false;
      });
  }

  login(user: String, pass: String): boolean {
    if (user == 'juanito' && pass == 'prez') {
      this.estadoConeccion = true;
      return true;
    }
    this.estadoConeccion = false;
    return false;
  }

  logout() {
    this.estadoConeccion = false;
  }

  isConected() {
    return this.estadoConeccion;
  }

  async registrar(user: any): Promise<boolean> {
    // set llave/valor
    return this.storage.set(user.username, user.password)
      .then((res) => {
        if (res != null) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

}
