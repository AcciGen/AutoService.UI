import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brend-ploshadki-1920',
  templateUrl: './brend-ploshadki-1920.component.html',
  styleUrl: './brend-ploshadki-1920.component.scss'
})
export class BrendPloshadki1920Component {
  brands !: Brand[];
  constructor(private http: HttpClient){}
ngOnInit(): void {
  this.getAll()
}

  getAll(){
    this.http.get<Brand[]>('https://localhost:7048/api/CarSeatBrand/GetAllCarSeatBrand?PageIndex=1&Size=10').
    subscribe((data)=>{
      this.brands = data
    });
  }
}

export interface Brand {
id: string;
name: string;
}
