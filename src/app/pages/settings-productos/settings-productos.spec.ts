import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProductos } from './settings-productos';

describe('SettingsProductos', () => {
  let component: SettingsProductos;
  let fixture: ComponentFixture<SettingsProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
