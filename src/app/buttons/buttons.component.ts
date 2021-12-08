import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  constructor() {}
  buttons = ['danger', 'primary', 'secondary'];

  ngOnInit(): void {}
  addButton(buttonText: string) {
    this.buttons.push(buttonText);
  }
  // getInput(event: Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }
}
