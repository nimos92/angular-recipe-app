import { Directive, OnInit, Input, ViewContainerRef, TemplateRef, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

export class DropdownDirective implements OnInit {
ngOnInit() {
}

constructor (private elRef: ElementRef) {}

@HostBinding('class.open') isOpen = false;
@HostListener('click') toggleOpen (){
    this.isOpen = !this.isOpen;
}
}