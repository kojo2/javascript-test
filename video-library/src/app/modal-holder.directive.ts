import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ModalHolder]'
})
export class ModalHolderDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
