import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CatService } from '../../services/cat.service';
import { GetCats, GetCatsSuccess } from '../actions/cats.actions';
import { getCatsList } from '../selectors/cats.selectors';



@Injectable()
export class CatsEffects {

  getCats$ = createEffect(() => this.actions$.pipe(
    ofType(GetCats),
    withLatestFrom(this.store.pipe(select(getCatsList))),
    mergeMap((action) => this.catsService.getCats(action[0].params)
      .pipe(
        map(cats => GetCatsSuccess({ cats: cats })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private catsService: CatService,
    private store: Store,
  ) {}
}
