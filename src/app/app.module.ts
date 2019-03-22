import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemotableComponent } from './demotable/demotable.component';
import { CustomDataTableComponent } from './custom-data-table/custom-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DemotableComponent,
    CustomDataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
