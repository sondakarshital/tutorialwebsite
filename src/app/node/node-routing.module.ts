import { ThirdTutorialComponent } from './third-tutorial/third-tutorial.component';
import { SecondTutorialComponent } from './second-tutorial/second-tutorial.component';
import { FirstTutorialComponent } from './first-tutorial/first-tutorial.component';
import { NodeComponent } from './node.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { 
	  path: 'nodeJs',
          component: NodeComponent,
          children: [ 
	    {
	       path: 'first',
	       component: FirstTutorialComponent
	   },
	   {
	       path: 'second',
	       component: SecondTutorialComponent
	   },
	   {
	       path: 'third',
	       component: ThirdTutorialComponent
       }	 
			
	   ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NodeRoutingModule { }
