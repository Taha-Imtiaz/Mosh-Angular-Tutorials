import { Component } from '@angular/core';
import { fade, slide } from 'app/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],

  // add animation to add animation
  // animations:[
  //   trigger('fade',[
  //     // register all states and transitions to implement animation

  //     state('void', style({opacity: 0})),
  //     // when state changes from void to deault
  //     transition('void => *',[
  //       // styles apply immediately during transition (from void to default)
  //       // style({
  //         // backgroundColor:"yellow",
  //         //  opacity: 0}),
  //       // animate after 2 sec (dont need 2nd argument angular apply it by default)
  //       animate(2000
  //         // ,  style({backgroundColor:"white", opacity: 1})
  //         )
  //     ]),

  //     // fadeOut transition
  //     transition('* => void' ,[
  //       animate(2000
  //         // , style({opacity: 0})
  //         )
  //     ])
  //   ])
  // ]

  //Cleaner syntax
  // animations:  [fade]
  animations:  [slide]

})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
