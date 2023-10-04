import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceregistrationComponent } from './serviceregistration.component';

describe('ServiceregistrationComponent', () => {
  let component: ServiceregistrationComponent;
  let fixture: ComponentFixture<ServiceregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
