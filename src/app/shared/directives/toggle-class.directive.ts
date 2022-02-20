import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

interface IOptions {
  flag: boolean,
  className: string,
}

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective implements OnChanges {
  @Input('appToggleClass') options!: IOptions

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.options.flag) {
      this.renderer.addClass(this.el.nativeElement, this.options.className)
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.options.className)
    }
  }

  // @HostListener('change') onChange() {
  //   console.log(this.options)
  //   if (!this.options.flag) {
  //     this.renderer.addClass(this.options.el, this.options.className)
  //   } else {
  //     this.renderer.removeClass(this.options.el, this.options.className)
  //   }
  // }

}
