import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usluga',
  templateUrl: './usluga.component.html',
  styleUrl: './usluga.component.scss'
})
export class UslugaComponent {
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
