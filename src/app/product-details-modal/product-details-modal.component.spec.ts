import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsModalComponent } from './product-details-modal.component';

describe('ProductDetailsModalComponent', () => {
  let component: ProductDetailsModalComponent;
  let fixture: ComponentFixture<ProductDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
