import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AttrDirectiveComponent],
  imports: [CommonModule, FormsModule],
  exports: [AttrDirectiveComponent],
})
export class DirectiveModule {}
