import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritChildAComponent } from './inherit-child-a.component';

describe('InheritChildAComponent', () => {
  let component: InheritChildAComponent;
  let fixture: ComponentFixture<InheritChildAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InheritChildAComponent ],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
