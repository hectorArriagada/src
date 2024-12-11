import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly storageKey = 'cursos';

  constructor() { }


}
