import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glavni',
  templateUrl: './glavni.component.html',
  styleUrl: './glavni.component.scss'
})
export class GlavniComponent {
  form111!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form111 = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form111.valid) {
      this.router.navigate(['/succes']);
    } else {
      alert('Fill inputs. Required');
    }
  }
}
