import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/interval';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/mapTo';
import {HOUR} from './reducers/clock';
import {SECOND} from './reducers/clock';
import {ClockComponent} from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //clock = Observable.interval(1000);

  clock;
  subject$ = (new Subject()).map((value) => ({type:HOUR, payload: value}));
  interval$ = Observable.interval(1000).mapTo({type:SECOND, payload: 4});

  //you got an error if you dint specify '<any>' for store
  constructor(store:Store<any>){
    //this.clock.subscribe(() => new Date());
    this.clock = store.select('clock');
     Observable.merge(
                     //when you click on the buton this 'subject$' will map to a value called'hour' and when ever you click this happens
                    this.subject$,
                    //this observable will emit value 'second' for each second
                    this.interval$
                    //depending on the emitted value, 'type' is set to 'second' or 'hour' which will be checked in the store, and the switch case statements will be executed
      ).subscribe((action) => {

        store.dispatch(action);
      });
  }
}
