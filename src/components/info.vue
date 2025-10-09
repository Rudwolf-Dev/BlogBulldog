<template>
  <section class="py-5">
    <div class="container"
      v-for="(Seccion, index) in Secciones"
      :key="index">
      <h2 class="mb-4">{{ Seccion.titulo }}</h2>
      <p v-for="(parrafo, i) in Seccion.texto"
      :key="i">
      {{ parrafo }}
    </p>
    </div>
  </section>
</template>

<script setup scoped>
  import { ref } from 'vue'

  const Secciones = ref([
    {
    titulo: "Sobre Nosotros",
    texto: [
      "Nuestro equipo desarrollador está conformado por tres integrantes: Rodolfo Pérez Martínez, Sara Giselle Méndez Gaona y Alondra Sofía Padilla Calderón.",
      "Cada uno aportó en diseño, programación y contenido para dar vida al Blog Bulldog."
      ]
    },
    {
    titulo: "Aniversario 95°",
    texto: [
      "Nuestro equipo desarrollador está conformado por tres integrantes: Rodolfo Pérez Martínez, Sara Giselle Méndez Gaona y Alondra Sofía Padilla Calderón.",
      "Cada uno aportó en diseño, programación y contenido para dar vida al Blog Bulldog."
      ]
    }
])
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
