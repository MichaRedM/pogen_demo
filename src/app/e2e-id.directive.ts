import { Directive, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { IdCollector } from '@pogen/client';
import { environment } from '../environments/environment';

@Directive({
  // tslint:disable-next-line
  selector: "[e2e]"
})
export class E2eIdDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line
  @Input('e2e')
  e2eId: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (!environment.production) {
      IdCollector.add(this.el.nativeElement, this.e2eId);
    }
  }
  ngOnDestroy(): void {
    if (!environment.production) {
      IdCollector.remove(this.e2eId);
    }
  }
}
