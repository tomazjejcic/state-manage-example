import{ Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-party-stats',
    templateUrl: './party-stats.component.html',
    styleUrls: ['./party-stats.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStats {

    @Input() invited;
    @Input() attending;
    @Input() guests;

}
