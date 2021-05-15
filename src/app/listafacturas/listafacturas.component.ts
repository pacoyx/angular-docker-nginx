import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Factura } from '../modelos/factura.model';
import { ComprobantesService } from '../servicios/comprobantes.service';
import { cargarFacturas } from '../store/actions';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-listafacturas',
  templateUrl: './listafacturas.component.html',
  styleUrls: ['./listafacturas.component.css']
})
export class ListafacturasComponent implements OnInit {

  facturas: Factura[] = [];
  subsFacturas: Subscription;
  cargando: boolean;
  error: any;
  constructor(
    private factuServis: ComprobantesService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.subsFacturas = this.store.select('facturasCompras').subscribe(resp => {
      this.facturas = resp.facturas;
      this.cargando = resp.loading;
      this.error = resp.error;
    });

    this.store.dispatch(cargarFacturas());

    // this.factuServis.getFacturas().subscribe(resp => {
    //   this.facturas = resp;
    // });

  }

}
