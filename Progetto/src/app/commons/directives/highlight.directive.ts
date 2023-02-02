import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {

   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green')
    
    } 
  
  
  @HostListener('mouseleave') onMouseLeave() {
     this.highlight(''); 
    }
  
  
  highlight(color: string) { 
    this.el.nativeElement.style.background = color;
   }

   
}


