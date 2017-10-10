import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './containers/app.component';
import { PersonlistComponent } from './components/personlist.component';
import { PersoninputComponent } from './components/personinput.component';

// Reducers
import { people } from './reducers/people';

// export const reducers = localStorageSync(['todos']);

@NgModule({
  declarations: [
    AppComponent,
    PersoninputComponent,
    PersonlistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({people}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
