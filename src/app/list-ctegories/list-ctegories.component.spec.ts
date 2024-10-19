import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCtegoriesComponent } from './list-ctegories.component';

describe('ListCtegoriesComponent', () => {
  let component: ListCtegoriesComponent;
  let fixture: ComponentFixture<ListCtegoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCtegoriesComponent]
    });
    fixture = TestBed.createComponent(ListCtegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
