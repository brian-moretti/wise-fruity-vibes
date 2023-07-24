import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FruityViceService {

  constructor(private http: HttpClient) {}

  getAllFruits() {
    return this.http.get(environment.fruitViceAPI + "/api/fruit/all")
  }
}
