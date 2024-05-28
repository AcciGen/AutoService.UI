import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products !: CarSeat[]
  brands !: CarSeatBrand[]
  categories !: CarSeatCategory[]
  size = 3;

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.getAll()
    this.getAllBrand()
    this.getAllMass()
  }
  getAll(){
    this.http.get<CarSeat[]>(`https://localhost:7048/api/CarSeat/GetAllCarSeat?PageIndex=1&Size=${this.size}`).
    subscribe((data)=>{
      this.products = data
    })
  }

  getAllBrand(){
    this.http.get<CarSeatBrand[]>(`https://localhost:7048/api/CarSeatBrand/GetAllCarSeatBrand?PageIndex=1&Size=10`).
    subscribe((data)=>{
      this.brands = data
    })
  }

  getAllMass(){
    this.http.get<CarSeatCategory[]>(`https://localhost:7048/api/CarSeatCategory/GetAllCarSeatCategory?PageIndex=1&Size=10`).
    subscribe((data)=>{
      this.categories = data
    })
  }
  seeMore(){
    this.size=this.size + 8;
    this.ngOnInit()
  }
  seeLess(){
    this.size=this.size - 8;
    this.ngOnInit()
  }
}


export interface CarSeat {
    id: string;
    name: string;
    photoPath: string;
    price: string;
    guarantee: string;
    mass: number;
    size: string;
    prodCountry: string;
    categoryId: string;
    brandId: string;
    category: CarSeatCategory;
    brand: CarSeatBrand;
}
export interface CarSeatBrand {
  id: string;
  name: string;
}
export interface CarSeatCategory {
  id: string;
  startAge: string;
  endAge: string;
}