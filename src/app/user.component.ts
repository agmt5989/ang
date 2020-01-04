import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <input type="text" (ngModel)="onUserInput($event)" [value]="name">
    <!-- <input type="text" [(ngModel)]="name"> -->
    <h1>Well, wait up {{name}}<h1>
    <p>What kind of user begins his life with a component?</p>
    <app-user-detail></app-user-detail>
    `
})
export class UserComponent {
    @Input() name = 'Michael';
    @Output() nameChanged = new EventEmitter<string>();

    onUserInput(e) {
      this.name = e.target.value;
    }
}
