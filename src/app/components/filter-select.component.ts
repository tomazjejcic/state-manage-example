import{ Component, Output, EventEmitter } from '@angular/core';
import{
    SHOW_ALL,
    SHOW_ATTENDING,
    SHOW_WITH_GUEST
} from '../actions';

@Component({
    selector: 'app-filter-select',
    templateUrl: './filter-select.component.html',
    styleUrls: ['./filter-select.component.scss'],
})
export class FilterSelect {

    public filters = [
        {friendly: 'All', action: SHOW_ALL},
        {friendly: 'Attending', action: SHOW_ATTENDING},
        {friendly: 'Attending w/ Guests', action: SHOW_WITH_GUEST}
    ];

    @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();

}
