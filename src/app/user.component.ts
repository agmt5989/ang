import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <input type="text" (input)="onUserInput($event)">
    <h1>Well, wait up {{name}}<h1>
    <p>What kind of user begins his life with a component?</p>`
})
export class UserComponent {
    name = 'Michael'

    onUserInput(e) {
        this.name = e.target.value;
    }
}
