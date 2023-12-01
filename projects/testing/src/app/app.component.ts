import { Component } from '@angular/core';
import { CustomOption } from '@lucasgomesagacode/custom-option-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing';

  reasonList: Array<CustomOption> = [
    new CustomOption(false, '', '', '')
  ]

  selectOption(customOption: CustomOption){

  }
}
