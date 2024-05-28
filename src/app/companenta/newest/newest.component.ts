import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrl: './newest.component.scss'
})
export class NewestComponent implements OnInit{

    news !: News[];
    constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getAll()
  }

    getAll(){
      this.http.get<News[]>('https://localhost:7048/api/News/GetAllNews?PageIndex=1&Size=11').
      subscribe((data)=>{
        this.news = data
      });
    }
}

export interface News {
  id: string;
  name: string;
  mainPhotoPath: string;
  description: string;
}
