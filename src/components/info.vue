<template>
  <section class="bg-light py-5">
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
  section {
    border-top: 3px solid #0d6efd;
  }
</style>
