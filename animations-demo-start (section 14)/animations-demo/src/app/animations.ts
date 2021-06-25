import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

// define reusable animations

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px' }),
    animate(500)
  ]),
  transition(':leave', [
    animate('0.5s ease-out',
      //  style({transform:'translateX(-100%'})
      keyframes([
        style({ offset: 0.2, opacity: 1, transform: 'translateX(20px)' }),
        style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' }),

      ])

    )
  ])
])

// export fade trigger that is reusable in multiple places
export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  // use alias when enter and when leavesy
  transition(':enter, :leave'

    // 'void <=> *'
    , [
      animate(2000)
    ])
])