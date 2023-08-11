import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSelectorComponent } from './html-selector/html-selector.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { AttrSelectorComponent } from './attr-selector/attr-selector.component';

@NgModule({
  declarations: [
    HtmlSelectorComponent,
    CssSelectorComponent,
    AttrSelectorComponent,
  ],
  imports: [CommonModule],
  exports: [HtmlSelectorComponent, CssSelectorComponent, AttrSelectorComponent],
})
export class SelectorModule {}
