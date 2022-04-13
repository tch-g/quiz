import { trigger, animate, transition, style, state } from '@angular/animations';

export const slowSlide = trigger('slowSlide', [
  state('*', style({
  })),

  transition(':enter', [
    style({
      transform: 'translateY(-40%)',
      opacity: 0
    }),
    animate('0.15s ease-in', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ]),

  transition(':leave', [
    animate('0.15s ease-in', style({
      transform: 'translateY(-40%)',
      opacity: 0
    }))
  ]),
]);