import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateName, updateEmail, resetForm } from './store/forms.actions';
import { selectEmail, selectName } from './store/forms.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  name$: Observable<string>;
  email$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.name$ = this.store.select(selectName);
    this.email$ = this.store.select(selectEmail);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });

    // Sync store values to form
    this.name$.subscribe(name => {
      this.form.get('name')?.setValue(name, { emitEvent: false });
    });

    this.email$.subscribe(email => {
      this.form.get('email')?.setValue(email, { emitEvent: false });
    });

    // Update store on form change
    this.form.get('name')?.valueChanges.subscribe(name => {
      this.store.dispatch(updateName({ name }));
    });

    this.form.get('email')?.valueChanges.subscribe(email => {
      this.store.dispatch(updateEmail({ email }));
    });
  }

  onReset(): void {
    this.store.dispatch(resetForm());
  }
}
