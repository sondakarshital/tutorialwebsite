import { NodeRoutingModule } from './node/node-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
   MatCheckboxModule, MatGridListModule, MatInputModule, MatCardModule, MatFormFieldModule,MatSelectModule,
   MatTreeModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule, MatTableModule, MatPaginatorModule, MatSortModule,MatDialogModule,MatProgressSpinnerModule
  ,MatProgressBarModule} from '@angular/material';
import { NodeComponent } from './node/node.component';
import { FirstTutorialComponent } from './node/first-tutorial/first-tutorial.component';
import { SecondTutorialComponent } from './node/second-tutorial/second-tutorial.component';
import { ThirdTutorialComponent } from './node/third-tutorial/third-tutorial.component';
import { ExpressJsComponent } from './express-js/express-js.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    FirstTutorialComponent,
    SecondTutorialComponent,
    ThirdTutorialComponent,
    ExpressJsComponent,
    JavascriptComponent,
    AngularjsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MatToolbarModule,
    MatInputModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTreeModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    AppRoutingModule,
    NodeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
