import { animate, state, style, transition, trigger } from '@angular/animations';

// define reusable animations

// export fade trigger that is reusable in multiple places
export let fade =  trigger('fade',[
    state('void', style({opacity:0 })),
    // use alias when enter and when leavesy
    transition(':enter, :leave'
      
      // 'void <=> *'
      ,[
      animate(2000)
    ])
  ])