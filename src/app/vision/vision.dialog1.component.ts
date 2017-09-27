import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision.dialog1',
  templateUrl: './vision.dialog1.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionDialog1Component implements OnInit {

    vision_time:string ="";

  constructor() {
      this.vision_time = sessionStorage.getItem('vision_time');
   }

   ngOnInit() {
    console.log('here time: '+this.vision_time);
  }


}
