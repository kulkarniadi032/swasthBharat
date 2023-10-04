import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinterestComponent } from './myinterest.component';

describe('MyinterestComponent', () => {
  let component: MyinterestComponent;
  let fixture: ComponentFixture<MyinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyinterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
