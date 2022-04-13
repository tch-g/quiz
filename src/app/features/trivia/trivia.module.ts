import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TriviaRoutingModule } from './trivia-routing.module';
import { TriviaComponent } from './trivia/trivia.component';
import { QuestionComponent } from './trivia/question/question.component';



@NgModule({
  declarations: [
    TriviaComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TriviaRoutingModule
  ]
})
export class TriviaModule { }
