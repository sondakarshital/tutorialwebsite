import { FifthTutorialComponent } from './fifth-tutorial/fifth-tutorial.component';
import { FourthTutorialComponent } from './fourth-tutorial/fourth-tutorial.component';
import { ThirdTutorialComponent } from './third-tutorial/third-tutorial.component';
import { SecondTutorialComponent } from './second-tutorial/second-tutorial.component';
import { FirstTutorialComponent } from './first-tutorial/first-tutorial.component';
import { NodeComponent } from './node.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//  { 
// 	  path: 'nodeJs',
//           component: NodeComponent,
//           children: [ 
// 	    {
// 	       path: 'introduction-to-nodeJs',
// 	       component: FirstTutorialComponent
// 	   },
// 	   {
// 	       path: 'setting-up-nodejs-environment',
// 	       component: SecondTutorialComponent
// 	   },
// 	   {
// 	       path: 'running-our-first-nodeJs-example',
// 	       component: ThirdTutorialComponent
// 	   },
// 	   {
// 	       path: 'callbacks-in-nodejs',
// 	       component: FourthTutorialComponent
// 	   },
// 		 {
// 	       path: 'async-parallel-series-waterfall',
// 	       component: FifthTutorialComponent
//        }
			
// 	   ],
	  
// 	},
	 { path:'nodeJs/introduction-to-nodeJs',component:FirstTutorialComponent},
	 { path:'nodeJs/setting-up-nodejs-environment',component:SecondTutorialComponent},
	 {path:'nodeJs/running-our-first-nodeJs-example',component:ThirdTutorialComponent},
	 {path:'nodeJs/callbacks-in-nodejs',component:FourthTutorialComponent},
	 {path:'nodeJs/async-parallel-series-waterfall',component:FifthTutorialComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NodeRoutingModule { }
