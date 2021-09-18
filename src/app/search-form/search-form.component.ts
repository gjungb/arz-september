import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
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
  termChange = new EventEmitter<string>();

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

    const validity$ = this.searchForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );

    const term$: Observable<string> = termControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    const result$ = term$.pipe(
      withLatestFrom(validity$),
      filter(([, valid]) => valid)
    );

    result$.subscribe({
      next: ([term]) => this.termChange.emit(term),
    });
  }

  submitForm(value: unknown): void {
    // this.searchTerm
    console.log(value);
  }
}
