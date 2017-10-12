import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './containers/app.component';
import { PersonlistComponent } from './components/personlist.component';
import { PersoninputComponent } from './components/personinput.component';
import { FilterSelect } from './components/filter-select.component';
import { PartyStats } from './components/party-stats.component';

// Reducers
import { people } from './reducers/people';
import { partyFilter } from './reducers/party-filter';

// export const reducers = localStorageSync(['todos']);

@NgModule({
  declarations: [
    AppComponent,
    PersoninputComponent,
    PersonlistComponent,
    FilterSelect,
    PartyStats
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({people, partyFilter}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
