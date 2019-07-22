import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-styles-lib',
  template: `
    <p>
      my-styles-lib works!
    </p>
  `,
  styles: []
})
export class MyStylesLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
