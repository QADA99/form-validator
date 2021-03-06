import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Error } from '../error';

@Component({
  selector: 'error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('300ms ease-out',
              style({ height: 66, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 66, opacity: 1 }),
            animate('200ms ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ErrorListComponent implements OnInit {

  @ViewChild('listCtn')
  entityListContainer!: ElementRef;
  iconUpOrDown: string = "pi pi-chevron-up";
  @Input()
  errors: Error[];
  @Output("select")
  selectErrorEvent = new EventEmitter<Error>();

  errorName: string;
  constructor() { }

  ngOnInit(): void {
  }

  select(error: Error) {
    this.selectErrorEvent.emit(error)

  }
  expandOrMinimz() {

    if (this.iconUpOrDown == "pi pi-chevron-up")
      this.iconUpOrDown = "pi pi-chevron-down";
    else
      this.iconUpOrDown = "pi pi-chevron-up";
    this.entityListContainer.nativeElement.classList.toggle('error-overlay-list-bubble--is-minimized');
  }

}
