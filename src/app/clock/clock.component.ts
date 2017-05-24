import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
   <h4>{{clock | async | date:'yMMMMEEEEdjms'}}</h4>
  `,
  styles: []
})
export class ClockComponent implements OnInit {
  @Input() clock;

  constructor() { }

  ngOnInit() {
  }

}
