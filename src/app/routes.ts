import {NgModule}  from  '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {VisionComponent} from './vision/vision.component';
import {HomeComponent} from './home/home.component';

@NgModule({
    imports:[
            RouterModule.forRoot([
                { path:'vision/addnew', component: VisionComponent },
                { path: '', component: HomeComponent }
            ])
    ],
    exports: [RouterModule]
})

export class Routes{

}