import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritChildBComponent } from './inherit-child-b.component';

describe('InheritChildBComponent', () => {
  let component: InheritChildBComponent;
  let fixture: ComponentFixture<InheritChildBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InheritChildBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
