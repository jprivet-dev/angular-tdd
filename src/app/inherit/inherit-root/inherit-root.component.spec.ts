import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritRootComponent } from './inherit-root.component';

describe('InheritRootComponent', () => {
  let component: InheritRootComponent;
  let fixture: ComponentFixture<InheritRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InheritRootComponent ],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
