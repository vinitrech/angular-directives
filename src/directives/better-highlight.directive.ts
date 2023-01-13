import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'brown';
  @HostBinding('style.backgroundColor') changeBackgroundColor: string; // specify to which property of the host element we want to bind

  constructor(private element: ElementRef, private renderer: Renderer2) { // renderer is used to capture the element for further manipulation
  }

  ngOnInit() {
    // there is a 4th argument to this function, where it can be passed values like '!important' for the attribute, for example
    // this.renderer.setStyle(this.element.nativeElement, "background-color", "blue")

    //easier way using Host Binding
    this.changeBackgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) { // adding listener on hover
    // this.renderer.setStyle(this.element.nativeElement, "background-color", this.highlightColor)
    this.changeBackgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) { // adding listener on mouse leave
    // this.renderer.setStyle(this.element.nativeElement, "background-color", this.defaultColor)
    this.changeBackgroundColor = this.defaultColor
  }
}
