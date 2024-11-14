import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private bd: Storage | null = null;
  private estadobd: Promise<void>;

  constructor(private storage: Storage) { 
    this.estadobd = this.onInit();
  }

  async onInit(): Promise<void> {
    const storage = await this.storage.create();
    this.bd = storage;
  }

  async BDConectada(): Promise<void> {
    await this.estadobd;
  }

  async get(key: string): Promise<any> {
    await this.BDConectada();
    const item = await this.bd?.get(key);
    return item ? JSON.parse(item) : null;
  }

  async set(key: string, valor: any): Promise<any> {
    await this.BDConectada();
    return this.bd?.set(key, JSON.stringify(valor));
  }

  async remove(key: string) {
    await this.BDConectada();
    this.bd?.remove(key);
  }
}

