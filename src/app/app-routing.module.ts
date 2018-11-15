import { AboutComponent } from './about/about.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ExpressJsComponent } from './express-js/express-js.component';
import { NodeComponent } from './node/node.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
// {path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'nodeJs',component:NodeComponent},
{path:'expressJs' ,component:ExpressJsComponent},
{path:'javascript' ,component:JavascriptComponent},
{path:'angularJs' ,component:AngularjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
