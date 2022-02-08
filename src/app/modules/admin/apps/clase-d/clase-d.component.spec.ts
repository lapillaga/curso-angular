import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseDComponent } from './clase-d.component';

describe('ClaseDComponent', () => {
  let component: ClaseDComponent;
  let fixture: ComponentFixture<ClaseDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
