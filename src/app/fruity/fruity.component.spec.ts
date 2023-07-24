import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruityComponent } from './fruity.component';

describe('FruityComponent', () => {
  let component: FruityComponent;
  let fixture: ComponentFixture<FruityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
