import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[genderDirective]'
})
export class GenderDirective implements OnInit {
    constructor(public el: ElementRef, public renderer: Renderer) {}
    @Input() genderDirective: string;
    ngOnInit() {
    // Use renderer to render the emelemt with styles
    if (this.genderDirective === 'Male') {
        // this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        // this.el.nativeElement.style.backgroundColor = 'green';
        this.renderer.setElementStyle( this.el.nativeElement, 'color', 'blue');
    } else if (this.genderDirective === 'Female') {
        this.el.nativeElement.style.color = 'magenta';
        // this.renderer.setElementStyle( this.el.nativeElement, 'color', 'magenta');
    }
}
}
