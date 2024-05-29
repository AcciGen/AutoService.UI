import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from '../all-service/all-service.component';

@Component({
  selector: 'app-kartochka-brend',
  templateUrl: './kartochka-brend.component.html',
  styleUrl: './kartochka-brend.component.scss'
})
export class KartochkaBrendComponent implements OnInit {

  services !: Service[];
  constructor(private http :HttpClient){}
  ngOnInit(): void {
    this.getAllServices()
  }

  getAllServices(){
    this.http.get<Service[]>('https://localhost:7048/api/Service/GetAllService?PageIndex=1&Size=10').
    subscribe((data)=>{
      this.services = data;
    })
  }
}
