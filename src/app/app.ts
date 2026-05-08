import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Con esto el HTML sabe qué mostrar
  paginaActual: string = 'inicio';

  irANosotros() {
    this.paginaActual = 'nosotros';
  }

  irAInicio() {
    this.paginaActual = 'inicio';
  }
}