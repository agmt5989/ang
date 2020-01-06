import { Component, Input, Output, EventEmitter } from '@angular/core';
import { random } from 'lodash'; // Won't work, because it's js, not ts

declare let _: any; // Fix 1 for lodash
// Fix 2 involves installing @types/lodash instead, which gives the typescript "port"

@Component({
    selector: 'app-user',
    template: `
    <input type="text" (ngModel)="onUserInput($event)" [value]="name">
    <!-- <input type="text" [(ngModel)]="name"> -->
    <h1>Well, wait up {{name}}<h1>
    <p>What kind of user begins his life with a component?</p>
    <p>
      {{number}}
    <button (click)="increaseNumber()" class="btn btn-primary btn-lg">Increase</button>
    </p>
    <app-user-detail></app-user-detail>
    `
})

export class UserComponent {
    number = 0;

    @Input() name = 'Initial Value';
    @Output() nameChanged = new EventEmitter<string>(); // Reminds me of java and C#

    onUserInput(e) {
      this.name = e.target.value;
    }

    increaseNumber() {
      // this.number++;
      // this.number = _.random(1, 20); // Fix 1
      this.number = random(1, 20); // Fix 2
    }
}
