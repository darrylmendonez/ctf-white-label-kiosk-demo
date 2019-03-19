import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';

export function fadeIn() {
  return trigger('fadeIn', [
    state('void', style({ position: 'absolute', width: '100%' })),
    state('*', style({ position: 'absolute', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0' }),
      animate('.25s ease-in-out', style({ opacity: '1' })),
    ]),
    transition(':leave', [
      style({ opacity: '1' }),
      animate('.25s ease-in-out', style({ opacity: '0' })),
    ]),
  ]);
}