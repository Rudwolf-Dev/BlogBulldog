<script setup>
import navMenu from './components/navMenu.vue';
import footMenu from './components/footMenu.vue';
</script>

<template>
  <div id="app-container">
    <header>
      <navMenu></navMenu>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
      <footMenu></footMenu>
    </footer>
  </div>
</template>

<style scoped>
#app-container {
  /* Contenedor principal para Flexbox */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  /* Permite que el contenido principal crezca y empuje el footer */
  flex-grow: 1;
  overflow: auto;
}

/* Asegura que el footer no se encoja */
footer {
  flex-shrink: 0;
}

/* ====== ESTILO GENERAL DE SECCIÓN ====== */
section {
  background-color: var(--bg-color);
  color: var(--text-color);
  /* Borde superior usando el acento principal */
  border-top: 3px solid var(--color-accent);
  transition: background-color 0.3s, color 0.3s;
}

.section-title {
  color: var(--primary); /* Azul */
}

/* ====== TARJETAS (Global) ====== */
.actividad-card {
  background-color: var(--card-bg);
  /* ... otros estilos */
}

.shadow-hover:hover {
  /* ... estilos de transformación */
  background-color: var(--card-hover);
}

/* ====== BOTONES ====== */
.btn-theme {
  background-color: var(--primary); /* Azul */
  color: white;
}

.btn-theme:hover {
  background-color: var(--accent); /* Amarillo */
  color: black;
}

/* ====== FORMULARIO / INPUTS ====== */
.input-group-text, .form-control {
  background-color: var(--input-bg);
  border-color: var(--input-border);
  color: var(--text-color);
}

.form-control::placeholder {
  color: rgba(150, 150, 150, 0.7);
}

/* ====== ALERTAS ====== */
.alert {
  background-color: var(--alert-bg);
  color: var(--alert-text);
  border: none;
}
</style>
