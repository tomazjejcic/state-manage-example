import { Component } from '@angular/core';
import { Store, provideStore } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { id } from '../id';
import {
    ADD_PERSON,
    REMOVE_PERSON,
    ADD_GUEST,
    REMOVE_GUEST,
    TOGGLE_ATTENDING
} from '../actions';
// import { FilterSelect } from '../components/filter-select.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public people;
    public filter;
    private attending;
    private guests;
    private subscription;

    constructor(
        private _store: Store<any>
    ) {
        /*
            demonstrating use without the async pipe
        */
        // this.subscription = this._store
        //     .select('people')
        //     .subscribe( people => {
        //         this.people = people;
        //     });

        /*
            Observable of people, utilzing the async pipe
            in our templates this will be subscribed to, with
            new values being dispayed in our template.
            Unsubscribe wil be called automatically when component
            is disposed.
        */
        this.people = _store.select('people');
        /*
            this is a naive way to handle projecting state, we will explore a better
            Rx based solution lower
        */
        this.filter = _store.select('partyFilter');
        this.attending = this.people.map(p => p.filter(person => person.attending));
        this.guests = this.people
            .map(p => p.map(person => person.guests)
                        .reduce((acc, curr) => acc + curr, 0));
    }

    // all state-changing actions get dispatched to and handled by reducers
    addPerson(name) {
        this._store.dispatch({type: ADD_PERSON, payload: {id: id(), name}});
    }

    addGuest(id) {
        this._store.dispatch({type: ADD_GUEST, payload: id});
    }

    removeGuest(id) {
        this._store.dispatch({type: REMOVE_GUEST, payload: id});
    }

    removePerson(id) {
        this._store.dispatch({type: REMOVE_PERSON, payload: id});
    }

    toggleAttending(id) {
        this._store.dispatch({type: TOGGLE_ATTENDING, payload: id});
    }

    updateFilter(filter) {
        this._store.dispatch({type: filter});
    }

    /*
      if you do not use async pipe and create manual subscriptions
      always remember to unsubscribe in ngOnDestroy, async pipe
      handles unsubscribe automaticaly
    */
    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }
}
