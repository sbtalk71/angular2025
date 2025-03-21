import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveArrayComponent } from './move-array.component';

describe('MoveArrayComponent', () => {
  let component: MoveArrayComponent;
  let fixture: ComponentFixture<MoveArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
