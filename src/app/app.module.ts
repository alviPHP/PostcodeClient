import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostcodesLookupComponent } from './postcodes-lookup/postcodes-lookup.component';


@NgModule({
  declarations: [
    AppComponent,
    PostcodesLookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
