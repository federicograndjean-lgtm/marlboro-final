import { Component } from '@angular/core';

@Component({
  selector: 'app-tablero-gestion',
  templateUrl: './tablero-gestion.component.html',
  styleUrls: ['./tablero-gestion.component.css']
})
export class TableroGestionComponent {
  
  // 1. Nuestra "Base de Datos" temporal (Lista de trámites)
  tramites = [
    { id: 1, vecino: 'Juan Manuel', pedido: 'Habilitación de Local', estado: 'Pendiente' },
    { id: 2, vecino: 'Delfina Peralta', pedido: 'Corte de Malezas', estado: 'En Proceso' }
  ];

  // 2. Variables que se conectan con los inputs del formulario (ngModel)
  nuevoVecino: string = '';
  nuevoPedido: string = '';

  // 3. Función para capturar los datos del formulario y sumarlos a la lista
  agregarTramite() {
    // Validamos que no envíen campos vacíos
    if (this.nuevoVecino.trim() && this.nuevoPedido.trim()) {
      const nuevo = {
        id: this.tramites.length + 1,
        vecino: this.nuevoVecino,
        pedido: this.nuevoPedido,
        estado: 'Pendiente'
      };
      
      // Agregamos el nuevo objeto al array
      this.tramites.push(nuevo);
      
      // Limpiamos los campos del formulario para el próximo trámite
      this.nuevoVecino = '';
      this.nuevoPedido = '';
    } else {
      alert('¡Epa! No te olvides de completar todos los campos del trámite.');
    }
  }

  // 4. Función para mover el expediente de estado
  actualizarEstado(id: number, nuevoEstado: string) {
    const tramite = this.tramites.find(t => t.id === id);
    if (tramite) {
      tramite.estado = nuevoEstado;
    }
  }
}
