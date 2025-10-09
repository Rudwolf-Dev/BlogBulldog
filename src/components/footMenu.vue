<template>
  <p class="mb-0 fw-semibold">2025 - eeeeeeeeeeee créditos</p>
</template>

<style scoped>
.footer-divider {
  height: 15px;
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
}
</style>
