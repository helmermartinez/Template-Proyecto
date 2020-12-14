import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReqascComponent } from './list-reqasc.component';

describe('ListReqascComponent', () => {
  let component: ListReqascComponent;
  let fixture: ComponentFixture<ListReqascComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReqascComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReqascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
