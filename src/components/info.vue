<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section-title py-4 d-flex justify-content-between align-items-center">
    <h2 class="container text-center fw-bold">Información</h2>
  </section>

  <!-- Secciones -->
  <section class="container py-3">
    <div class="actividad-card">
    <div v-for="(Seccion, index) in Secciones"
      :key="index">
      <h2>{{ Seccion.titulo }}</h2>
      <p v-for="(parrafo, i) in Seccion.texto"
      :key="i">
      {{ parrafo }}
      </p>
      <img :src="Seccion.img" alt="">
    </div>
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
      "Cada uno encargado de una parte esencial de la página, el código, diseño y contenido."
      ],
    img:""
    },
    {
    titulo: "Aniversario 95°",
    texto: [
      "Festejamos este aniversario rindiendo un homenaje a la trayectoria de la Preparatoria Álvaro Obregón, mostrando los clubs y deportes actuales. El 4 de Octubre celebramos que la EIAO ha sido y es un pilar significante en la educación."
      ]
    },
    {
    titulo: "Dudas",
    texto: [
      "Si tienes alguna duda sobre los clubs culturales puedes dirigirte con la Mtra. Jaqueline Garza en prefectura o en el caso de ser acerca de los deportes puedes preguntar en la oficina de Coordinación Deportiva."
      ]
    }
])
</script>

<style scoped>
/* === Aplicación de las variables === */
section {
  color: var(--text-color);
}

.section-title {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary);

  /* Fondo: Acento secundario (Amarillo brillante en claro, Rojo oscuro en oscuro) */
  background-color: var(--color-accent-secondary);
  /* Texto: Color de texto principal (Negro en claro, Blanco en oscuro) */
  color: var(--color-text);
  border-top: 6px solid var(--color-card);
  border-bottom: 6px solid var(--color-orange);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 32px;
}

.actividad-card {
  /* Fondo: Blanco (Color de tarjeta) */
  background: var(--color-card);
  border-radius: 8px;
  padding: 30px;
  border: none;
  transition: transform 0.2s ease;
  border-bottom: 6px solid var(--color-orange);
}

.card {
  background: var(--color-card);
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
