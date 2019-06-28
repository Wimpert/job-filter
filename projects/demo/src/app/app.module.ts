import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AttJobFilterModule } from 'projects/att-job-filter/src/public-api';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AttJobFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
