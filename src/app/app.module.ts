import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
// import { WheelDirective } from './wheel.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MentionComponent } from './home/mention/mention.component';

@NgModule({
  declarations: [
    AppComponent,
    // WheelDirective,
    LoaderComponent,
    HomeComponent,
    ToolbarComponent,
    MentionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
