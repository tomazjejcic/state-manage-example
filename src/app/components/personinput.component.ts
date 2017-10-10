import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-personinput',
    templateUrl: './personinput.component.html',
    styleUrls: ['./personinput.component.scss']
})
export class PersoninputComponent {

    @Output() addPerson = new EventEmitter();

    add(personInput) {
        this.addPerson.emit(personInput.value);
        personInput.value = '';
    }
}
