import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStylesLibComponent } from './my-styles-lib.component';

describe('MyStylesLibComponent', () => {
  let component: MyStylesLibComponent;
  let fixture: ComponentFixture<MyStylesLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStylesLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStylesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
