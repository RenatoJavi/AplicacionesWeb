import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBodyComponent } from './componente-body.component';

describe('ComponenteBodyComponent', () => {
  let component: ComponenteBodyComponent;
  let fixture: ComponentFixture<ComponenteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
