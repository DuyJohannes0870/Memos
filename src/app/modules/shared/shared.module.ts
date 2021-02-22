import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [MainNavComponent, SearchBarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  
  exports: [MainNavComponent,MaterialModule]
})
export class SharedModule { }
