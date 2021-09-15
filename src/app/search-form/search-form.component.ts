import { Component, OnInit } from '@angular/core';
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
} from 'rxjs/operators';

@Component({
  selector: 'arz-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;

  termControl!: FormControl;

  readonly minlength = 3;

  searchTerm = 'Moby Dick';

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    /**
     * A control for the single input
     */
    this.termControl = this.fb.control(this.searchTerm, {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(this.minlength)],
    });
    /**
     * A form to combine all inputs
     */
    this.searchForm = this.fb.group({
      term: this.termControl,
    });

    /**
     * An Observable of the validity of the form
     */
    const status$ = this.searchForm.statusChanges.pipe(
      distinctUntilChanged(),
      filter((status) => status === 'VALID'),
      mapTo(true)
    );

    status$.subscribe({
      next: (changed) => console.log(changed),
    });

    /**
     * An Observable of the value of the search term
     */
    const term$ = this.termControl.valueChanges.pipe(debounceTime(1_000));

    term$.subscribe({
      next: (term) => console.log(term),
    });
  }

  submitForm(value: unknown): void {
    // this.searchTerm
    console.log(value);
  }
}
