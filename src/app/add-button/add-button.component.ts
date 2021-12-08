import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  constructor() {}

  @Output('onAddButton') addButtonEmitter = new EventEmitter<string>();
  addButton(inputButton: HTMLInputElement) {
    //first way to get element value
    // this.addButtonEmitter.emit(inputButton.value);
    // inputButton.value = '';
    this.addButtonEmitter.emit(this.inputButton2.nativeElement.value);
    this.inputButton2.nativeElement.value = '';
  }
  @ViewChild('inputButton2') inputButton2: ElementRef; //second way
  ngOnInit(): void {}
}
