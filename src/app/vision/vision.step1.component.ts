import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vision.step1',
  templateUrl: './vision.step1.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionStep1Component implements OnInit {

    form1: FormGroup;
    post: any;
    vision_time: '';

  constructor(fb: FormBuilder) {
      this.form1 = fb.group({
        'time': ''
      });
   }

   ngOnInit() {
    this.form1.get('time').valueChanges.subscribe(
        (time)=>{
            if(time != ''){
                this.vision_time = time;
            }
        }
    )
  }

   addPost(post){
       this.vision_time = post.time;
   }

}
