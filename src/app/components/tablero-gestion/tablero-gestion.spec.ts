import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importante para que no falle por el ngModel
import { TableroGestionComponent } from './tablero-gestion.component';

describe('TableroGestionComponent', () => {
  let component: TableroGestionComponent;
  let fixture: ComponentFixture<TableroGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroGestionComponent ],
      imports: [ FormsModule ] // Agregamos esto para que el test entienda los formularios
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});