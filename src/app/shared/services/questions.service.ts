import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question';
import { ServiceResult } from '../models/service-result';
import { stripHtml } from '../helpers/strip-html';
import { shuffle } from '../helpers/shuffle';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [];
  private currentIndex = -1;

  constructor(private http: HttpClient) { }

  getQuestions(amount: number, category?: string, difficulty?: string): Observable<Question[]> {
    let params = new HttpParams();

    params = params.append('amount', amount.toString());

    if (category) {
      params = params.append('category', category);
    }

    if (difficulty) {
      params = params.append('difficulty', difficulty.toLowerCase());
    }

    return this.http.get<ServiceResult<Question[]>>('https://opentdb.com/api.php', {params: params})
      .pipe(
        map(items => items.results),
        map(items => this.removeHtml(items)),
        map(items => this.shuffleAnswers(items)),
      );
  }

  setQuestions(questions: Question[]) {
   this.questions = questions;
  }

  getNextQuestion(): Question {
    return this.questions[++this.currentIndex];
  }

  getCurrIndex(): number {
    return this.currentIndex;
  }

  getAmount(): number {
    return this.questions.length;
  }

  removeHtml(questions: Question[]) {
    return questions.map(q => {
      q.question = stripHtml(q.question);
      q.correct_answer = stripHtml(q.correct_answer);
      q.incorrect_answers = q.incorrect_answers.map(a => stripHtml(a));
      return q;
    });
  }

  shuffleAnswers(questions: Question[]) {
    return questions.map(q => {
      q.answers = [];
      q.answers.push(q.correct_answer);
      q.incorrect_answers.forEach(a => q.answers?.push(a));
      q.answers = shuffle(q.answers);
      return q;
    });
  }

  reset() {
    this.currentIndex = -1;
  }
}