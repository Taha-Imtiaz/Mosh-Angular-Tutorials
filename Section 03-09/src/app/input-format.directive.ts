import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // input directive (define property format)
  // @Input('format') format
  // alternate syntax
  @Input('appInputFormat') format


  constructor(private el: ElementRef) { }

  // decorate onFocus with hostListener decorator (subscribe to the event raised from DOM)
  // focus is the name of DOM Event
  @HostListener('focus') onFocus() {
    console.log("on Focus");

  }
  @HostListener('blur') onBlur() {
    console.log("on Blur");
    // get input element value(Dom object) 
    let value:string = this.el.nativeElement.value
    if(this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase()

    }
    else {
    this.el.nativeElement.value = value.toUpperCase()

    }
  }
  

}
