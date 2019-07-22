import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bootstrap',
  templateUrl: './my-styles-lib.component.html',
  styleUrls: ['./../../../../../node_modules/bootstrap/scss/bootstrap-grid.scss', './my-styles-lib.component.scss']
})
export class MyStylesLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
