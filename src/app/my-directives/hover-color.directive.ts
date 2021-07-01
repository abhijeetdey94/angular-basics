import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverColor]'
})
export class HoverColorDirective implements OnInit {
  @Input('hoverColor') highlighColor: string = 'yellow';
  @Input('defaultColor') defaultColor: string = 'cadetblue';
  @HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostBinding('style.color') textColor?: string;
  @HostBinding('style.height') boxHeight?: string;
  // [hoverColor]="'limegreen'" defaultColor="cadetblue"

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.textColor = 'white';
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.highlighColor;
    this.textColor = 'black';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.textColor = 'white';
  }

  @HostListener('click') onClick(eventData: Event) {
    this.boxHeight = '500px';
  }
}
