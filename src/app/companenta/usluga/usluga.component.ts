import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Service } from '../all-service/all-service.component';

@Component({
  selector: 'app-usluga',
  templateUrl: './usluga.component.html',
  styleUrl: './usluga.component.scss'
})
export class UslugaComponent {
  form111!: FormGroup;
  services !: Service[];

  constructor(private fb: FormBuilder, private router: Router, private http : HttpClient) { }

  ngOnInit() {
    this.form111 = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      comment: ['', Validators.required]
    });
    this.getAllServices()
  }
  onSubmit() {
    if (this.form111.valid) {
      this.router.navigate(['/succes']);
    } else {
      alert('Fill inputs. Required');
    }
  }

  getAllServices(){
    this.http.get<Service[]>('https://localhost:7048/api/Service/GetAllService?PageIndex=1&Size=10').
    subscribe((data)=>{
      this.services = data;
    })
  }
}
