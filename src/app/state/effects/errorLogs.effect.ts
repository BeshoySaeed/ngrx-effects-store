import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as errorActions from '../actions/errorLogs.action';
import { ErrorLogsService } from 'src/app/services/error-logs.service';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(errorActions.loadErrors),
      mergeMap(() =>
        this.errorLogsService.getErrorLogs().pipe(
          map((data) => errorActions.loadErrorSuccess({ data })),
          catchError((error) => of(errorActions.loadErrorFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private errorLogsService: ErrorLogsService
  ) {}
}
