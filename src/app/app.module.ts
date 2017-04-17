import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Ng2SelectModule } from 'ng2-material-select';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { GraphComponent } from './components/graph/graph.component';
import { CardComponent } from './components/list/card/card.component';
import { FiltersComponent } from './components/list/filters/filters.component';
import { NavbarComponent } from './layout/navbar.component';

import { listFilter } from './components/list/pipes/list.pipe';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GraphComponent,
    NavbarComponent,
    CardComponent,
    FiltersComponent,
    listFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    FlexLayoutModule,
    Ng2SelectModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
