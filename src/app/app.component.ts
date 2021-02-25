import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rachida';

   name: string = "";
   onClick($event:any) {
        console.log("ok is clicked", $event)
      }
   
 

}
