import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnagraficaService {
  constructor(private http: HttpClient) {}

  getAllName() {
    return this.http.get('./src/app/mockup/api/dati.json');
  }
}
