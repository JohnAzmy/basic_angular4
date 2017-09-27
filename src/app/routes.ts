import {NgModule}  from  '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {VisionComponent} from './vision/vision.component';
import {VisionStep1Component} from './vision/vision.step1.component';
import {VisionDialog1Component} from './vision/vision.dialog1.component';
import {HomeComponent} from './home/home.component';

@NgModule({
    imports:[
            RouterModule.forRoot([
                { path:'vision/addnew', component: VisionComponent },
                {path: 'vision/step1', component:VisionStep1Component},
                {path: 'vision/dialog1', component:VisionDialog1Component},
                { path: '', component: HomeComponent }
            ])
    ],
    exports: [RouterModule]
})

export class Routes{

}