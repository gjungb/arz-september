import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  mapTo,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'arz-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output('arzSearch')
  search = new EventEmitter<string>();

  searchForm!: FormGroup;

  readonly minlength = 3;

  searchTerm = 'Moby Dick';

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    const termControl = this.fb.control(this.searchTerm, {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(this.minlength)],
    });

    this.searchForm = this.fb.group({
      term: termControl,
    });

    const term$ = termControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(() => termControl.valid)
    );

    term$.subscribe({
      next: (v) => this.search.emit(v),
    });

    // const validity$ = this.searchForm.statusChanges.pipe(
    //   filter((v) => v === 'VALID'),
    //   withLatestFrom(term$)
    // );

    // validity$.subscribe({
    //   next: (v) => console.log(v),
    // });
  }

  submitForm(value: unknown): void {
    // this.searchTerm
    console.log(value);
  }
}
