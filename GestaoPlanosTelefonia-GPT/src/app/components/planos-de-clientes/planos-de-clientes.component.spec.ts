import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosDeClientesComponent } from './planos-de-clientes.component';

describe('PlanosDeClientesComponent', () => {
  let component: PlanosDeClientesComponent;
  let fixture: ComponentFixture<PlanosDeClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanosDeClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
