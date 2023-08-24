import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasDiariasComponent } from './comidas-diarias.component';

describe('ComidasDiariasComponent', () => {
  let component: ComidasDiariasComponent;
  let fixture: ComponentFixture<ComidasDiariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidasDiariasComponent]
    });
    fixture = TestBed.createComponent(ComidasDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
