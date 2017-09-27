import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-vision.step1',
  templateUrl: './vision.step1.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionStep1Component implements OnInit {

    form1: FormGroup;
    post: any;
    vision_time: '';
    
  constructor(fb: FormBuilder, private router: Router) {
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

   addPost(post, route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       this.vision_time = post.time;
       localStorage.setItem('vision_time', this.vision_time);
       // redirect to route
       this.router.navigate(['vision/dialog1']);
   }

}
