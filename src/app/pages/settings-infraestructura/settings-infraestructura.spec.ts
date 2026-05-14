import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInfraestructura } from './settings-infraestructura';

describe('SettingsInfraestructura', () => {
  let component: SettingsInfraestructura;
  let fixture: ComponentFixture<SettingsInfraestructura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsInfraestructura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsInfraestructura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
