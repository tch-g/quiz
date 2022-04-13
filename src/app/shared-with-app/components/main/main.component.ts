import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { finalize, Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { ResetScore, SetName } from 'src/app/shared/store/user/user.actions';
import { UserState } from 'src/app/shared/store/user/user.state';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class MainComponent implements OnInit {

  public userInfoForm!: FormGroup;
  public optionsForm!: FormGroup;
  public showTriviaOptions = false;

  @Select (UserState.userName) name$!: Observable<any>;


  constructor(
    private fb: FormBuilder,
    private questionsService: QuestionsService,
    private loadingService: LoadingService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initUserInfoForm();
    this.reset();
  }

  initUserInfoForm(): void {
    this.name$.pipe(
      tap(value => {
        this.userInfoForm = this.fb.group({
          name: [value, [Validators.maxLength(30)]]
        });
      })
    ).subscribe();
  }

  userInfoSubmitted(): void {
    this.store.dispatch(new SetName(this.userName.value));
    this.initOptionsfoForm();
    this.showTriviaOptions = true;
  }

  initOptionsfoForm(): void {
    this.optionsForm = this.fb.group({
      category: '',
      difficulty: ''
    });
  }

  backToUserInfo(): void {
    this.showTriviaOptions = false;
  }

  startTrivia(): void {
    const amount = 10;
    const category = this.category.value;
    const difficulty = this.difficulty.value;
    this.loadingService.show();

    this.questionsService.getQuestions(amount, category, difficulty)
    .pipe(
      tap(result => this.questionsService.setQuestions(result)),
      finalize(() => {
        this.loadingService.hide();
        this.router.navigateByUrl('trivia');
      })
    ).subscribe();
  }

  reset(): void {
    this.store.dispatch(new ResetScore());
    this.questionsService.reset();
  }

  setUser(name: string): void {
    this.store.dispatch(new SetName(name));
  }

  get userName(): FormControl {
    return this.userInfoForm.get('name') as FormControl;
  }

  get category(): FormControl {
    return this.optionsForm.get('category') as FormControl;
  }

  get difficulty(): FormControl {
    return this.optionsForm.get('difficulty') as FormControl;
  }

}
