import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Cmp1Component } from './cmp1/cmp1.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [Cmp1Component],
  exports: [Cmp1Component],
})
export class Lib1Module {}
