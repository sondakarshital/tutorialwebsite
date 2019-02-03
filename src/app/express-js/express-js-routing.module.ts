import { EFirstTutorialComponent } from './../express-js//first-tutorial/first-tutorial.component';

import {ESecondTutorialComponent } from './../express-js/second-tutorial/second-tutorial.component';

import { ExpressJsComponent } from './express-js.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//  { 
// 	  path: 'expressJs',
//           component: ExpressJsComponent,
//           children: [ 
// 	    {
// 	       path: 'introduction-to-expressJs',
// 	       component: EFirstTutorialComponent
// 	   },
// 	   {
// 	       path: 'setting-up-nodejs-environment',
// 	       component: ESecondTutorialComponent
// 	   }
			
// 	   ]
// 	}
{ path:'expressJs/introduction-to-expressJs',component:EFirstTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExpressRoutingModule { }
