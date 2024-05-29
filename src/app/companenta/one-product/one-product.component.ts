import { CarSeat } from './../products/products.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.scss'
})
export class OneProductComponent implements OnInit{
  product !: CarSeat;
  aydi : string | null = localStorage.getItem("pr_id");
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getCarSeat(this.aydi ?? "9812d13c-9418-4dcf-87df-9676a7a028c5" );
  }

  getCarSeat(id:string){
    this.http.get<CarSeat>(`https://localhost:7048/api/CarSeat/GetByIdCarSeat/${id}`).
    subscribe((data)=>{
      this.product = data;
      console.log(data)
    });
  }
}
