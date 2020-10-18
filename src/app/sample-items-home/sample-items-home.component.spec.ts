import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleItemsHomeComponent } from './sample-items-home.component';

describe('SampleItemsHomeComponent', () => {
  let component: SampleItemsHomeComponent;
  let fixture: ComponentFixture<SampleItemsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleItemsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleItemsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
