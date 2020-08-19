import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConteinerComponent } from './ng-conteiner.component';

describe('NgConteinerComponent', () => {
  let component: NgConteinerComponent;
  let fixture: ComponentFixture<NgConteinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgConteinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
