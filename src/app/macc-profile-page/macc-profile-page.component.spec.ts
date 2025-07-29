import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaccProfilePageComponent } from './macc-profile-page.component';

describe('MaccProfilePageComponent', () => {
  let component: MaccProfilePageComponent;
  let fixture: ComponentFixture<MaccProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccProfilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaccProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
