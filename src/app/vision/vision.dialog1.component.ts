import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision.dialog1',
  templateUrl: './vision.dialog1.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionDialog1Component implements OnInit {

    vision_time:string ="";

  constructor() {
      this.vision_time = localStorage.getItem('vision_time');
      console.log('here time: '+this.vision_time);
   }

   ngOnInit() {
    
  }


}
