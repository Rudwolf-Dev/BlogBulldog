<template>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-4">Sobre nosotros</h2>
      <p>{{ sobreNosotros }}</p>

      <h3 class="mt-5">Dudas</h3>
      <p>{{ dudas }}</p>
    </div>
  </section>
</template>

<script setup scoped>
  import { ref } from 'vue'

  const sobreNosotros = ref("Nuestro equipo desarrollador está conformado por tres integrantes: Rodolfo, Sara y Sofía. Cada uno aportó en diseño, programación y contenido para dar vida al Blog Bulldog.")
  const dudas = ref("Si tienes dudas sobre los clubs culturales puedes dirigirte con la Mtra. Jaqueline Garza o en el caso de los deportes puedes preguntar en la oficina de Coordinación Deportiva.")
</script>

<style scoped>
/* === Aplicación de las variables === */
section {
  color: var(--text-color);
}

.card {
  background-color: var(--card-bg);
  border-color: var(--card-border);
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.input-group-text {
  background-color: var(--input-bg);
  border-color: var(--input-border);
  color: var(--text-color);
}

.form-control {
  background-color: var(--input-bg);
  border-color: var(--input-border);
  color: var(--text-color);
}

.form-control::placeholder {
  /* Usamos un color fijo para el placeholder, ya que 'rgba(var(--text-color), 0.7)' no es un formato CSS válido */
  color: rgba(150, 150, 150, 0.7);
}

.alert {
  background-color: var(--alert-bg);
  color: var(--alert-text);
  border: none;
}

.badge.bg-success {
  background-color: #28a745 !important;
}
</style>
