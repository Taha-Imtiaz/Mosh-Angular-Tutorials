import { animate, state, style, transition, trigger } from '@angular/animations';


export const expandCollapse = trigger('expandCollapse',[
    // define custom state
    state('collapsed',style({
      height:0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    })),
    // state('expanded', style({
    //   height: "*", //set height dynamically
    //   paddingTop: "*",
    //   paddingBottom: "*",
    //   overflow:"auto" //overflow according to content
    // })),
    transition('collapsed => expanded',[
      animate('300ms ease-out', style({
          height: "*", //set height dynamically
          paddingTop: "*",
          paddingBottom: "*",
        })),
      animate('1s',style({opacity: 1}))
    ]),
    transition('expanded => collapsed',[
      animate('300ms ease-in')
    ])
  ])