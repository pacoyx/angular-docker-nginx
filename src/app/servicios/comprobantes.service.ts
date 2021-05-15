import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IresponseFacturas } from '../modelos/IresponseFacturas';

@Injectable({
  providedIn: 'root'
})
export class ComprobantesService {

  constructor(private httpClient: HttpClient) { }

  getFacturas() {
    return this.httpClient.get('http://localhost:4000/facturas')
      .pipe(
        map((resp: IresponseFacturas) => resp.info)
      );
  }

}
