import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProductCardComponent } from 'src/app/modules/admin/home/public-product-card/public-product-card.component';

describe('PublicProductCardComponent', () => {
  let component: PublicProductCardComponent;
  let fixture: ComponentFixture<PublicProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
