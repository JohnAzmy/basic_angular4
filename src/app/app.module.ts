import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { Routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
