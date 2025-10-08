<template>
  <footer class="footer-bulldog text-center py-3 mt-5">
    <div class="footer-divider"></div>
    <p class="mb-0 fw-semibold">2025 - eeeeeeeeeeee créditos</p>
  </footer>
</template>

<style scoped>
/* Este componente usa las variables globales definidas para ambos temas. */
.footer-bulldog {
  /* Fondo principal: Usa el color de fondo general o el color de tarjeta para más contraste */
  background-color: var(--bg-dark);
  /* Color del texto: Usa el color de texto general del tema */
  color: var(--color-text);

  font-family: 'Open Sans', sans-serif;
  position: relative;
}

.footer-divider {
  height: 10px;
  background: linear-gradient(
    to bottom,
    /* Franja 1: Acento principal (Rojo en claro, Amarillo en oscuro) */
    var(--color-accent) 0%,
    var(--color-accent) 33%,

    /* Franja 2: Acento secundario (Amarillo en claro, Rojo en oscuro) */
    var(--color-accent-secondary) 33%,
    var(--color-accent-secondary) 66%,

    /* Franja 3: Naranja de la paleta (se usará el valor fijo #fe7200 ya que no tiene variable asignada en el tema) */
    #fe7200 66%,
    #fe7200 100%
  );
  margin-bottom: 10px;
}
</style>
