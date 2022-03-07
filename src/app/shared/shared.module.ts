import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrimPipe } from './pipes/trim.pipe';
import { UppercaseDirective } from './directives/uppercase/uppercase.directive';
import { OnlyNumbersDirective } from './directives/only-numbers/only-numbers.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrimPipe,
    UppercaseDirective,
    OnlyNumbersDirective
  ],
  declarations: [
    TrimPipe,
    UppercaseDirective,
    OnlyNumbersDirective
  ]
})
export class SharedModule {
}
