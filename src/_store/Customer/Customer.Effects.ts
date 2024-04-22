import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../app/_service/master.service';
import {
  loadCustomer,
  loadCustomerFail,
  loadCustomerSuccess,
} from './Customer.Actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CutomerEffects {
  constructor(private action$: Actions, private servece: MasterService) {}

  _loadCustomer = createEffect(() =>
    this.action$.pipe(
      ofType(loadCustomer),
      exhaustMap(() =>
        this.servece.GetAllCustomer().pipe(
          map((data: any) => {
            return loadCustomerSuccess({ list: data });
          }),
          catchError((error) => {
            return of(loadCustomerFail({ errormessage: error }));
          })
        )
      )
    )
  );
}
