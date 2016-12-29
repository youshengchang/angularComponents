import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccordionTab } from './components/accordion/accordion-tab';
import { Accordion } from './components/accordion/accordion';
import { UserInformation } from './components/user-info/user-info';
import { Collapse } from './collapse';
import { TextMarker } from './text-marker';
import { OnlyIf } from './only-if';

@NgModule({
  declarations: [
    AppComponent,
    AccordionTab,
    Accordion,
    UserInformation,
    Collapse,
    TextMarker,
    OnlyIf
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
