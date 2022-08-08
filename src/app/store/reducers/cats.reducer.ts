import { createReducer, on } from '@ngrx/store';
import * as CatsActions from '../actions/cats.actions';
import { initialCatState } from '../state/cats.state';




export const catsReducer = createReducer(
  initialCatState,
  on(CatsActions.GetCatsSuccess, (state, { cats }) => {
    return cats
  }),
);

