import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityUsuarios } from './security-usuarios';

describe('SecurityUsuarios', () => {
  let component: SecurityUsuarios;
  let fixture: ComponentFixture<SecurityUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityUsuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
