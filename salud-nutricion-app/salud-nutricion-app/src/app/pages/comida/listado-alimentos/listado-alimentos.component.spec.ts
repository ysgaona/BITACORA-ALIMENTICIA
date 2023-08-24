import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlimentosComponent } from './listado-alimentos.component';

describe('ListadoAlimentosComponent', () => {
  let component: ListadoAlimentosComponent;
  let fixture: ComponentFixture<ListadoAlimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAlimentosComponent]
    });
    fixture = TestBed.createComponent(ListadoAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
