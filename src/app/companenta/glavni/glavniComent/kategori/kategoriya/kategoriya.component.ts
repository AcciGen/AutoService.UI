import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../../../all-service/all-service.component';

@Component({
  selector: 'app-kategoriya',
  templateUrl: './kategoriya.component.html',
  styleUrl: './kategoriya.component.scss'
})
export class KategoriyaComponent implements OnInit{
  services !: Service[]

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getAllServices();
  }

  pics: string[] = [
    "assets/glavni/icon (4).svg",
    "assets/glavni/icon (5).svg",
    "assets/glavni/icon (7).svg",
    "assets/glavni/icon (8).svg"
];
getAllServices(){
  this.http.get<Service[]>('https://localhost:7048/api/Service/GetAllService?PageIndex=1&Size=10').
  subscribe((data)=>{
    this.services = data;
  })
}
  getRandomPic(): string {
    const randomIndex = Math.floor(Math.random() * this.pics.length);
    return this.pics[randomIndex];
  }


}
