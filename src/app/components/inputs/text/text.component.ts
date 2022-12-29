import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text[inputId][labelValue]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() inputId!: string;
  @Input() containerClasses!: string[];
  @Input() labelClasses!: string[];
  @Input() inputClasses!: string[];
  @Input() labelValue!: string;
  @Input() parentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    if (!this.containerClasses) {
      this.containerClasses = ["w-full", "md:w-1/2", "px-3", "mb-6", "md:mb-0"];
    }
    if (!this.labelClasses) {
      this.labelClasses = ["block", 'uppercase', 'tracking-wide', 'text-gray-700', 'text-xs', 'font-bold', 'mb-2'];
    }
    if (!this.inputClasses) {
      this.inputClasses = ['appearance-none', 'block', 'w-full', 'bg-gray-200', 'text-gray-700', 'border', 'rounded', 'py-3', 'px-4', 'mb-3', 'leading-tight', 'focus:outline-none', 'focus:bg-white']
    }
    // if (!this.parentForm) {
    //   this.parentForm = '';
    // }
  }

}
