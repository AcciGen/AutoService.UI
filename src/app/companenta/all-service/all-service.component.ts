import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-service',
  templateUrl: './all-service.component.html',
  styleUrl: './all-service.component.scss'
})
export class AllServiceComponent implements OnInit{
  news !: Service[];
    constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getAll()
  }

    getAll(){
      this.http.get<Service[]>('https://localhost:7048/api/Service/GetAllService?PageIndex=1&Size=11').
      subscribe((data)=>{
        this.news = data
      });
    }
}

export interface Service {
  id: string;
  name: string;
  servicesId: string;
  services: ServiceCategory;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}
