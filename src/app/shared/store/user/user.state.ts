import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IncrementScore, ResetScore, SetName } from './user.actions';

export interface UserStateModel {
  name: string;
  score: number;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    name: '',
    score: 0
  }
})

@Injectable()
export class UserState {

  @Selector()
  static userName(state: UserStateModel) {
    return state.name;
  }

  @Selector()
  static userScore(state: UserStateModel) {
    return state.score;
  }

  @Action(SetName)
  setName(context: StateContext<UserStateModel>, payload: SetName) {
    context.patchState({name: payload.name})
  }

  @Action(IncrementScore)
  incrementScore(context: StateContext<UserStateModel>) {
    const currentScore = context.getState().score;
    context.patchState({score: currentScore + 1});
  }

  @Action(ResetScore)
  resetScore(context: StateContext<UserStateModel>) {
    context.patchState({score: 0});
  }
}