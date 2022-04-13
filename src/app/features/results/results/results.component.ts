import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { slowSlide } from 'src/app/shared/animations/slow-slide.animation';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { ResetScore } from 'src/app/shared/store/user/user.actions';
import { UserState } from 'src/app/shared/store/user/user.state';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [slowSlide],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {

  @Select (UserState.userName) name$!: Observable<string>;
  @Select (UserState.userScore) score$!: Observable<number>;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private store: Store
  ) { }

  retry(): void {
    this.store.dispatch(ResetScore);
    this.questionsService.reset();
    this.router.navigateByUrl('info');
  }

  get amount(): number {
    return this.questionsService.getAmount();
  }

  ngOnInit(): void {
  }

}
