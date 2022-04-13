import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { TriviaOptionsComponent } from './components/main/trivia-options/trivia-options.component';
import { UserInfoComponent } from './components/main/user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    MainComponent,
    TriviaOptionsComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   
  ],
  exports: [SharedModule,
            MainComponent,
    UserInfoComponent,
    TriviaOptionsComponent
  ]
})
export class SharedWithAppModule { }
