import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChildComponent } from './my-components/first-child/first-child.component';
import { SecondChildComponent } from './my-components/second-child/second-child.component';
import { HttpClientModule } from '@angular/common/http';
import { HoverColorDirective } from './my-directives/hover-color.directive';

@NgModule({
  declarations: [
    FirstChildComponent,
    AppComponent,
    SecondChildComponent,
    HoverColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    FirstChildComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
