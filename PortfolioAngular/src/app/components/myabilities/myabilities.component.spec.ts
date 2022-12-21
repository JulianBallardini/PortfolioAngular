import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyabilitiesComponent } from './myabilities.component';

describe('MyabilitiesComponent', () => {
  let component: MyabilitiesComponent;
  let fixture: ComponentFixture<MyabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
