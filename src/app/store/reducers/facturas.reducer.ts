import { createReducer, on } from '@ngrx/store';
import { Factura } from 'src/app/modelos/factura.model';
import { cargarFacturas, cargarFacturasError, cargarFacturasSuccess } from '../actions';

export interface FacturasState {
    facturas: Factura[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const facturasInitialState: FacturasState = {
    facturas: [],
    loaded: false,
    loading: false,
    error: null
};


const _facturasReducer = createReducer(
    facturasInitialState,
    on(cargarFacturas, (state) => ({ ...state, loading: true })),

    on(cargarFacturasSuccess, (state, { facturas }) => ({
        ...state,
        loading: false,
        loaded: true,
        facturas: [...facturas]
    })),

    on(cargarFacturasError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function facturasReducer(state, action) {
    return _facturasReducer(state, action);
}