import { Component } from '@angular/core';

@Component({
  selector: 'app-tablero-gestion',
  templateUrl: './tablero-gestion.component.html',
  styleUrls: ['./tablero-gestion.component.css']
})
export class TableroGestionComponent {

  // 1. Lista de trámites (Nuestra base de datos temporal)
  tramites: any[] = [
    { id: 1, vecino: 'Juan Manuel', pedido: 'Habilitación de Local', estado: 'Pendiente' },
    { id: 2, vecino: 'Delfina Peralta', pedido: 'Corte de Malezas', estado: 'En Proceso' }
  ];

  // 2. Variables para capturar lo que el usuario escribe (ngModel)
  nuevoVecino: string = '';
  nuevoPedido: string = '';

  // 3. Función para agregar un nuevo trámite a la lista
  agregarTramite() {
    if (this.nuevoVecino.trim() !== '' && this.nuevoPedido.trim() !== '') {
      const nuevo = {
        id: this.tramites.length + 1,
        vecino: this.nuevoVecino,
        pedido: this.nuevoPedido,
        estado: 'Pendiente'
      };
      
      // Lo sumamos al array
      this.tramites.push(nuevo);

      // Limpiamos los cuadraditos de texto
      this.nuevoVecino = '';
      this.nuevoPedido = '';
    } else {
      alert('¡Epa! No dejes campos vacíos antes de cargar el trámite.');
    }
  }

  // 4. Función para cambiar el estado de un trámite
  actualizarEstado(id: number, nuevoEstado: string) {
    const tramite = this.tramites.find(t => t.id === id);
    if (tramite) {
      tramite.estado = nuevoEstado;
    }
  }
}