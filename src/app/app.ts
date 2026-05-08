// Agregá esta variable arriba con las otras
filtroVecino: string = '';

// Y esta función (getter) que es la que va a usar el HTML
get tramitesFiltrados() {
  return this.tramites.filter(t => 
    t.vecino.toLowerCase().includes(this.filtroVecino.toLowerCase()) ||
    t.pedido.toLowerCase().includes(this.filtroVecino.toLowerCase())
  );
}