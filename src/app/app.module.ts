import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './pere/fils/fils.component';
import { StudentsComponent } from './students/students.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    StudentsComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
