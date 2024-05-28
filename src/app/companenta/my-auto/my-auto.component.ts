import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-auto',
  templateUrl: './my-auto.component.html',
  styleUrl: './my-auto.component.scss'
})
export class MyAutoComponent implements OnInit {
  cars !: UserCar[];


  createCarmodel : UserCar = {
    brand : '',
    carModel: '',
    prodYear: '',
    viNcode: '',
    usersId: '',
  }

  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.http.get<UserCar[]>(`https://localhost:7048/api/Car/GetAllCars?PageIndex=1&Size=10&UserId=25cda1d6-0267-4966-826d-1d563b1a89b5`).
    subscribe((data)=>{
      this.cars = data;
    })
  }

  addCar(){

  }

}

export interface UserCar {
    id?: string;
    brand: string;
    carModel: string;
    prodYear: string;
    viNcode: string;
    usersId: string;
    users?: User;
}

export interface User {
    id:string
    firstName: string;
    lastName: string;
    email:string;
    role: string;
    cars: UserCar[];
}