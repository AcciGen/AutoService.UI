import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nomla',
  templateUrl: './nomla.component.html',
  styleUrl: './nomla.component.scss'
})
export class NomlaComponent {
  form11!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form11 = this.fb.group({
      brandName: ['', Validators.required], // Text input for brand name
      brandCategory: this.fb.group({ // Group of checkboxes
        all: [false],
        cars: [false],
        things: [false],
        others: [false],
        service: [false]
      }),
      brandHistory: ['', Validators.required] // Textarea for brand history
    });
  }

  onSubmit(): void {
    if (this.form11.valid) {
      // Perform submission logic or navigate
      this.router.navigate(['/succes']);
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
