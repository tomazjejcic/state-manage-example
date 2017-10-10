import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-personlist',
    templateUrl: './personlist.component.html',
    styleUrls: ['./personlist.component.scss']
})
export class PersonlistComponent {
    /*
      "dumb" components do nothing but display data based on input and
      emit relevant events back up for parent, or "container" components to handle
    */
    @Input() people;
    @Output() addGuest = new EventEmitter();
    @Output() removeGuest = new EventEmitter();
    @Output() removePerson = new EventEmitter();
    @Output() toggleAttending = new EventEmitter();
}
