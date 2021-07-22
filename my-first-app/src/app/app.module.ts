import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { SimpleCompComponent } from './simple-comp/simple-comp.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    SimpleCompComponent,
    DataBindingComponent,
    PracticeComponent,
    DirectivesComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
