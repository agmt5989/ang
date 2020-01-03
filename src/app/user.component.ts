import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <input type="text" [(ngModel)]="name">
    <h1>Well, wait up {{name}}<h1>
    <p>What kind of user begins his life with a component?</p>
    `
})
export class UserComponent {
    @Input() name = 'Michael';
}
