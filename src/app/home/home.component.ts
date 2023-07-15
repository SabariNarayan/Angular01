import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Employee {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  employees: Employee[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: Employee[]) => {
        this.employees = data.slice(0, 10); 
      });
  }
  

 

}
