import {ComponentFactoryResolver, ComponentRef, Directive, HostBinding, HostListener, Input, ViewContainerRef} from '@angular/core';
import {Type} from '@angular/core/src/type';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() type: Type<any>;
  @Input() data: any;
  private componentShowed: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  @HostListener('mouseenter', ['$event'])
  onEnter($event) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(factory);
    (<any>componentRef.instance).data = this.data;
  }

  @HostListener('mouseleave', ['$event'])
  onLeave($event) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(factory);
    (<any>componentRef.instance).data = this.data;
  }
}
