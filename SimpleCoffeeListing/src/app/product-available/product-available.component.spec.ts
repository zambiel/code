import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAvailableComponent } from './product-available.component';

describe('ProductAvailableComponent', () => {
  let component: ProductAvailableComponent;
  let fixture: ComponentFixture<ProductAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAvailableComponent]
    });
    fixture = TestBed.createComponent(ProductAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
