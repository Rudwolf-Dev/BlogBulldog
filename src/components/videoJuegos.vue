<template>
  <section class="section-title hammersmith-one-regular py-4 d-flex justify-content-between align-items-center">
    <h2 class="container text-center fw-bold">Videojuegos</h2>
  </section>

  <section class="container py-5">
    <div class="row g-4">
      <div
        v-for="Juegos in videojuegos"
        :key="Juegos.nombre"
        :id="Juegos.id"
        class="col-md-6 mb-4"
      >
        <div class="card actividad-card h-100 border-0 shadow-hover">
          <div class="img-wrapper">
            <img :src="Juegos.img" class="card-img-top" :alt="Juegos.nombre">
          </div>

          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h5 class="card-title fw-bold">{{ Juegos.nombre }}</h5>
            </div>

            <p class="text-muted small mb-1"><strong>Misión:</strong> {{ Juegos.desc || 'Completa todas las especialidades de la EIAO' }}</p>
            <p class="text-muted small mb-1"><strong>Por:</strong> {{ Juegos.responsable || 'Por confirmar' }}</p>

            <div class="d-flex justify-content-between mt-3">
              <a :href="Juegos.url">
                <button class="btn btn-outline-theme btn-sm w-100 me-2">
                <i class="bi bi-controller me-1"></i> Jugar
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const videojuegos = ref([
  {
    nombre: "Juego EIAO 95",
    id: "Juegos",
    desc: "Completa todas las especialidades de la EIAO",
    responsable: "5L4",
    img: "JuegoEIAO95.png",
    url: "https://scratch.mit.edu/projects/1224384126/",
    screenshot: [
      "JuegoEIAO95-1.png",
      "JuegoEIAO95-2.png",
      "JuegoEIAO95-3.png"
    ]
  }
])
</script>

<style scoped>
/* ====== VARIABLES DE COLOR ====== */
:root,
[data-bs-theme="light"] {
  --bg-color: #f8f9fa;
  --text-color: #212529;
  --card-bg: #ffffff;
  --card-hover: #f1f3f5;
  --primary: #0d6efd;
  --accent: #ffc107;
}

[data-bs-theme="dark"] {
  --bg-color: #121212;
  --text-color: #e9ecef;
  --card-bg: #1e1e1e;
  --card-hover: #2a2a2a;
  --primary: #4dabf7;
  --accent: #ffd43b;
}

/* ====== ESTILO GENERAL ====== */
section {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
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
}

/* ====== TARJETAS ====== */
.actividad-card {
  background-color: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s;
}

.shadow-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  background-color: var(--card-hover);
}

.img-wrapper {
  overflow: hidden;
  height: 180px;
  background: #f0f4f8;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.img-wrapper img:hover {
  transform: scale(1.1);
}

/* ====== BOTONES ====== */
.btn-theme {
  background-color: var(--primary);
  color: white;
  border: none;
  transition: background-color 0.3s;
}

.btn-theme:hover {
  background-color: var(--accent);
  color: black;
}

.btn-outline-theme {
  border-color: var(--primary);
  color: var(--primary);
  background: transparent;
  transition: all 0.3s;
}

.btn-outline-theme:hover {
  background-color: var(--primary);
  color: white;
}

/* ====== FORMULARIO ====== */
.input-group-text {
  background-color: var(--card-bg);
  border-color: var(--primary);
  color: var(--primary);
}

.form-control {
  background-color: var(--card-bg);
  color: var(--text-color);
  border-color: var(--primary);
}

.form-control::placeholder {
  color: rgba(150, 150, 150, 0.7);
}

/* ====== ALERTAS ====== */
.alert {
  border: none;
  background-color: var(--accent);
  color: black;
  border-radius: 10px;
  font-weight: 500;
}
</style>
