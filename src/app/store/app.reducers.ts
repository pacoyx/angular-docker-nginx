import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    facturasCompras: reducers.FacturasState;
}

export const appReducers: ActionReducerMap<AppState> = {
    facturasCompras: reducers.facturasReducer
};
