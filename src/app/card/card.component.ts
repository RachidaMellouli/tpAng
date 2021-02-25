import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   
  imgUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  constructor() { }

  ngOnInit(): void {
  }

}
