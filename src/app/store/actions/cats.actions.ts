import { createAction, props } from '@ngrx/store';
import { Cat, CatSearchParams } from '../models/cats';

export const ECatsActions = {
  GetCats: '[Cats] Get Cats',
  GetCatsSuccess: '[Cats] Get Cats Success',
}


export const GetCats = createAction(
  ECatsActions.GetCats,
  props<{ params: CatSearchParams }>()
);

export const GetCatsSuccess = createAction(
  ECatsActions.GetCatsSuccess,
  props<{ cats: Cat[] }>()
);
