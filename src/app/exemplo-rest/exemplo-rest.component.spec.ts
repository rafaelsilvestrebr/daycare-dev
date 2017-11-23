import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploRestComponent } from './exemplo-rest.component';

describe('ExemploRestComponent', () => {
  let component: ExemploRestComponent;
  let fixture: ComponentFixture<ExemploRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
