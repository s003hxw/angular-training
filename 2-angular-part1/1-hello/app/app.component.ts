import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>hello {{name}}</div>`
})
export class AppComponent { name = 'world'; }
