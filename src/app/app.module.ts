import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from './buttons/buttons.component';
import { Panel2Component } from './panel2/panel2.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ButtonsComponent,
    Panel2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
