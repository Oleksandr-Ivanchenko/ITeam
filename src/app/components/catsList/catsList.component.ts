import { Component, OnInit } from '@angular/core'
import { Cat, CatSearchParams, SelectOption } from 'src/app/store/models/cats'
import { CatService } from 'src/app/services/cat.service';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { GetCats } from '../../store/actions/cats.actions';
import { getCatsList } from '../../store/selectors/cats.selectors';


@Component({
  selector: 'app-catsList',
  templateUrl: './catsList.component.html',
  styleUrls: ['./catsList.component.scss']
})

export class CatsListComponent implements OnInit{
  cats$ = this.store.pipe(select(getCatsList))
  constructor(
    public fb: FormBuilder,
    private catServise: CatService,
    private store: Store<{ cats: Cat[] }>
  ) {}

  catParams: CatSearchParams = {
    limit: 10,
    size: 'small',
  }

  ngOnInit(): void {
    this.catServise.getBreedsOptions().subscribe(breeds => {
      this.breeds = [
        { name: 'All', id: ''},
        ...breeds,
      ];
    })

    this.store.dispatch(GetCats({ params: this.catParams }));
  }

  isSubmitted = false;
  registrationForm = this.fb.group({
    breed: [''],
    limit: ['10'],
  });

  changeBreed(e: Event) {
    this.breed?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  changeLimit(e: Event) {
    this.limit?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get breed() {
    return this.registrationForm.get('breed');
  }

  get limit() {
    return this.registrationForm.get('limit');
  }

  onSubmit(): void {
    this.store.dispatch(GetCats({ params: {
      breed_ids: String(this.breed?.value),
      limit: Number(this.limit?.value),
    }}));
    this.breed?.setValue('', {
      onlySelf: true,
    });
    this.limit?.setValue('10', {
      onlySelf: true,
    });
  }


  breeds: SelectOption[] = [];
}
