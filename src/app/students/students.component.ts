import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students=[
    {
    "name": "Will Smith",
    "email": "email@email.com",
    "country": "USA"
    },
    {
    "name": "Jackline Joy",
    "email": "email@email.com",
    "country": "France"
    },
    {
    "name": "Alu Arjun",
    "email": "email@email.com",
    "country": "India"
    },
    {
    "name": "Kavitha Kumar",
   "email": "email@email.com",
    "country": "Germany"
    },
    {
    "name": "John Snow",
    "email": "email@email.com",
    "country": "United Kingdom"
    },
    {
    "name": "Priya Dutt",
   "email": "email@email.com",
    "country": "USA"
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
