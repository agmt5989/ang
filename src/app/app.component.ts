import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-one';
  rootName = 'el Mike';
  number = 0;

  nameChanged(newName) {
    this.rootName = newName;
  }

  increaseNumber() {
    this.number++;
  }
}
