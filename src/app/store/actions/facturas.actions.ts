import { createAction, props } from '@ngrx/store';
import { Factura } from '../../modelos/factura.model';

export const cargarFacturas = createAction('[Facturas] Cargar Facturas');

export const cargarFacturasSuccess = createAction('[Facturas] Cargar Facturas Success',
    props<{ facturas: Factura[] }>());

export const cargarFacturasError = createAction('[Facturas] Cargar Facturas Error',
    props<{ payload: any }>());
