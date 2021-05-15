import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ComprobantesService } from 'src/app/servicios/comprobantes.service';
import * as facturasActions from '../actions/facturas.actions';


@Injectable()
export class FacturasEffects {

    constructor(private actions$: Actions, private facturasServis: ComprobantesService) { }

    cargarFacturas$ = createEffect(
        () => this.actions$.pipe(
            ofType(facturasActions.cargarFacturas),
            mergeMap(
                () => this.facturasServis.getFacturas()
                    .pipe(
                        map(facturas => facturasActions.cargarFacturasSuccess({ facturas })),
                        catchError(err => of(facturasActions.cargarFacturasError({ payload: err })))
                    )
            )
        )
    );

}
