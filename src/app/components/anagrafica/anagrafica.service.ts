import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnagraficaService {
  constructor(private http: HttpClient) {}

  getAllName() {
    return this.http.get('src/app/mockup/api/dati.json');
  }
}
