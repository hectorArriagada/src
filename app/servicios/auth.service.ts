import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estadoConeccion: boolean = false;
  
  constructor(private storage: StorageService) { }

  async loginBD(user: string, pass: string): Promise<any> {
    try {
      const res = await this.storage.get(user);
      if (res && res.password === pass) {
        this.estadoConeccion = true;
        return res;
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error en el sistema' + error);
      return null;
    }
  }

  login(user: string, pass: string): boolean {
    if (user === 'juanito' && pass === 'prez') {
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
    try {
      const res = await this.storage.set(user.username, user);
      return res != null;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
