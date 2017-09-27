import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { VisionStep1Component } from './vision/vision.step1.component';
import { VisionDialog1Component } from './vision/vision.dialog1.component';
import { Routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent,VisionStep1Component,
    VisionDialog1Component
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    Routes,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
