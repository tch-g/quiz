import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private name = '';
  private currScore = 0;

  constructor() { }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getCurrentScore() {
    return this.currScore;
  }

  setCurrentScore(score: number) {
    this.currScore = score;
  }
}