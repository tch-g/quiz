import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Question } from 'src/app/shared/models/question';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { IncrementScore } from 'src/app/shared/store/user/user.actions';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaComponent implements OnInit {

  question!: Question;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getNextQuestion();
  }

  getNextQuestion(): void {
    this.question = this.questionsService.getNextQuestion();
  }

  setScore(result: boolean): void {
    if (result) {
      this.store.dispatch(IncrementScore);
    }
  }

  showResults(): void {
    this.router.navigateByUrl('results');
  }

  get currIndex(): number {
    return this.questionsService.getCurrIndex();
  }

  get amount(): number {
    return this.questionsService.getAmount();
  }
  
}
