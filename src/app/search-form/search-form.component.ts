import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'arz-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;

  readonly minlength = 3;

  searchTerm = 'Moby Dick';

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      term: this.fb.control(this.searchTerm, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(this.minlength)],
      }),
    });

    // this.searchForm.valueChanges
  }

  submitForm(value: unknown): void {
    // this.searchTerm
    console.log(value);
  }
}
