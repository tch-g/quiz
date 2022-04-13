import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
