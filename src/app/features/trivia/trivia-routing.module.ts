import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { TriviaGuard } from './guards/trivia.guard';
import { DirectAccessGuard } from 'src/app/shared/guards/direct-access.guard';

const routes: Routes = [
  {
    path: '', component: TriviaComponent, canActivate: [TriviaGuard, DirectAccessGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaRoutingModule { }