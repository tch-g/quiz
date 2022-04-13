import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { UserService } from './services/user.service';
import { QuestionsService } from './services/questions.service';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [ ReactiveFormsModule,
    LoadingComponent]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [UserService, QuestionsService]
    };
  }
}
