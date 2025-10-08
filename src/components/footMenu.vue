<template>
  <footer class="footer-bulldog text-center py-3 mt-5">
    <div class="footer-divider"></div>
    <p class="mb-0 fw-semibold">2025 - eeeeeeeeeeee créditos</p>
  </footer>
</template>

<style scoped>
.footer-bulldog {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: 'Open Sans', sans-serif;
  position: relative;
}

.footer-divider {
  height: 10px;
  background: linear-gradient(
    to bottom,
    /* Franja 1: Acento principal (Rojo/Amarillo) */
    var(--color-accent) 0%,
    var(--color-accent) 33%,
    /* Franja 2: Acento secundario (Amarillo/Rojo) */
    var(--color-accent-secondary) 33%,
    var(--color-accent-secondary) 66%,
    /* Franja 3: Naranja de la paleta */
    #fe7200 66%,
    #fe7200 100%
  );
  margin-bottom: 10px;
}
</style>
