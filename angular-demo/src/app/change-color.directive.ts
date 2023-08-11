import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  @Input('app-in-color') color!: string;
  @Input('app-out-color') outColor!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.el.nativeElement.style.animation = `bouceUp 6s infinite alternate`;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.backgroundColor = this.color;
  }
  @HostListener('mouseenter')
  onmousehover() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-decoration',
      'underline'
    );
    this.backgroundColor = this.outColor;
  }
  @HostListener('mouseleave')
  onmouseout() {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'all 2s ease-out'
    );
    this.backgroundColor = this.color;
  }

  @HostBinding('style.backgroundColor') backgroundColor = 'red';
}
