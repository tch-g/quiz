import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectAccessGuard } from 'src/app/shared/guards/direct-access.guard';
import { ResultsComponent } from './results/results.component';
import { ResultsGuard } from './guards/results.guard';

const routes: Routes = [
  {
    path: '', component: ResultsComponent, canActivate: [ResultsGuard, DirectAccessGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }