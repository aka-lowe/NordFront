import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideEditorComponent } from './side-editor/side-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SideEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormGroup,
    FormControl,
    HttpClient,
    Injectable,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
