import { SimpleChanges } from '@angular/core';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CustomOption } from '../model/customOption';

@Component({
  selector: 'lib-custom-option',
  templateUrl: './custom-option.component.html',
  styleUrls: ['./custom-option.component.scss']
})
export class CustomOptionComponent implements OnInit {

  @Input() bordered: boolean = false;
  @ViewChild('main') main: ElementRef | undefined;

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (this.dropdownStatus) {
      if (this.main && !this.main.nativeElement.contains(targetElement) && this.dropdownStatus) {
        this.dropdownStatus = false;
      }
    }
  }

  dropdownStatus: boolean = false;

  @Input() type: string | undefined;
  @Input() inicialValue: string = '';
  @Input() value: any;
  @Input() label: string | undefined;
  @Input() options: Array<CustomOption> = [new CustomOption(true, '', '', '')];
  @Input() disabled: boolean | undefined;
  @Input() fillWidth: boolean | undefined;
  @Input() invalid: boolean | undefined;
  @Input() filled: boolean | undefined;
  @Input() updateInicialValue: any;
  @Output() selectOptionEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.inicialValue) {
      let customOption = this.options.find(c => c.value === this.inicialValue);
      if (customOption) this.selectOption(customOption);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* if (changes.updateInicialValue && changes.updateInicialValue.previousValue !== changes.updateInicialValue.currentValue && changes.updateInicialValue.currentValue === 'Todos') {
      this.value = undefined;
    } */
  }


  openOptions() {
    if (this.disabled) return;
    setTimeout(() => {
      this.dropdownStatus = true;
    }, 1);
  }

  selectOneOfMultiple(event: Event, customOption: CustomOption) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    if (!Array.isArray(this.value)) this.value = [];

    if (isChecked) {
      this.value.push(customOption);
    } else {
      const optionIndex = this.value.findIndex((o: any) => o.value === customOption.value);
      this.value.splice(optionIndex, 1);
      if (this.value.length === 0) this.value = this.inicialValue as any;
    }
    let updatedCustomOption = new CustomOption(false, '', this.value.map((o: any) => o.value).join(','), customOption.formControlName)
    this.selectOptionEmitter.emit(updatedCustomOption);
  }

  selectAll() {
    const incomplete = this.options.filter(o => !o.selected).length > 0;
    if (incomplete) {
      this.options.map(o => o.selected = true);
      this.value = this.options;
    }
    else {
      this.options.map(o => o.selected = false);
      this.value = this.inicialValue as any;
    }
    let customOption = new CustomOption(false, '', this.value.map((o: any) => o.value).join(','), this.options[0].formControlName)
    this.selectOptionEmitter.emit(customOption);
  }

  selectOption(customOption: CustomOption) {
    this.selectOptionEmitter.emit(customOption);
    this.value = [customOption];
    setTimeout(() => {
      this.dropdownStatus = false;
    }, 10);
  }

  getValue() {
    if (Array.isArray(this.value)) {
      return this.value.map(o => o.description)?.join(',');
    } else if (this.inicialValue) {
      return this.inicialValue;
    } else return this.value;
  }

  changeDate(event: any) {
    let customOption: CustomOption = new CustomOption(false, '', event.target.value, 'dateInitialCreation');
    this.selectOptionEmitter.emit(customOption);
  }

}
