import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEmpresa } from './settings-empresa';

describe('SettingsEmpresa', () => {
  let component: SettingsEmpresa;
  let fixture: ComponentFixture<SettingsEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsEmpresa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
