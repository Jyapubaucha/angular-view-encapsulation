import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // if ViewEncapsulation.None is coded the css property will be apply
  // to the child parent too.
  
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-view-encapsulation';
}
