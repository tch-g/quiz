import { trigger, animate, transition, style, state } from '@angular/animations';

export const slideUp = trigger('slideUp', [
  state('*', style({
  })),

  transition(':enter', [
    style({
      transform: 'translateY(-30%)',
      opacity: 0
    }),
    animate('0.1s ease-in', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ]),

  transition(':leave', [
    animate('0.1s ease-in', style({
      transform: 'translateY(-30%)',
      opacity: 0
    }))
  ]),
]);