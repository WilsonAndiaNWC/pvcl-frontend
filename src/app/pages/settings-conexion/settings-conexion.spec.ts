import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConexion } from './settings-conexion';

describe('SettingsConexion', () => {
  let component: SettingsConexion;
  let fixture: ComponentFixture<SettingsConexion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsConexion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsConexion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
