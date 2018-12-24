import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef, private  renderer: Renderer2) {
    }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor= this.defaultColor; // for host binding
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor; // for host binding
    }
    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = 'green';
    }


}
