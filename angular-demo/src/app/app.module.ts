import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorModule } from './selector/selector.module';
import { DirectiveModule } from './directive/directive.module';
import { ChangeColorDirective } from './change-color.directive';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [AppComponent, ChangeColorDirective, DemoComponent],
  imports: [BrowserModule, AppRoutingModule, SelectorModule, DirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
