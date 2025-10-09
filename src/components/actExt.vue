<template>
  <section class="container py-5">
    <h2 class="section-title text-center mb-5 fw-bold">Actividades Extracurriculares</h2>

    <!-- Buscador -->
    <div class="input-group mb-5 shadow-sm">
      <span class="input-group-text">
        <i class="bi bi-search"></i>
      </span>
      <input
        v-model="query"
        type="text"
        class="form-control"
        placeholder="Ej. Ajedrez, Música, Robótica..."
      >
    </div>

    <div class="row g-4">
      <div
        v-for="club in filteredClubs"
        :key="club.nombre"
        class="col-md-4 col-sm-6"
      >
        <div class="card actividad-card h-100 border-0 shadow-hover">
          <div class="img-wrapper">
            <img :src="club.img" class="card-img-top" :alt="club.nombre">
          </div>

          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h5 class="card-title fw-bold">{{ club.nombre }}</h5>
            </div>

            <p class="text-muted small mb-1"><strong>Horario:</strong> {{ club.desc || 'Por confirmar' }}</p>
            <p class="text-muted small mb-1"><strong>Responsable:</strong> {{ club.responsable || 'Por confirmar' }}</p>
            <p class="text-muted small"><strong>Alumnos inscritos:</strong> {{ club.alumnos ?? 'Por confirmar' }}</p>

            <div class="d-flex justify-content-between mt-3">
              <button
                class="btn btn-outline-theme btn-sm w-50 me-2"
                @click="verFotos(club.nombre)"
              >
                <i class="bi bi-images me-1"></i> Fotos
              </button>
              <button
                class="btn btn-theme btn-sm w-50"
                @click="verActividades(club.nombre)"
              >
                <i class="bi bi-clipboard-check me-1"></i> Actividades
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Estado vacío -->
      <div v-if="filteredClubs.length === 0" class="col-12 text-center">
        <div class="alert alert-warning shadow-sm">
          No se encontraron clubes que coincidan con “{{ query }}”.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const query = ref('')

const clubs = ref([
  { nombre: "Banda de Guerra",
    desc: "Jueves 5:10-6:50pm, Sábado 12:50-1:30pm. Cancha Polivalente",
    responsable: "Ing. Joel Cuellar",
    alumnos: null,
    img: "banda de guerra.jpg"
  },
  { nombre: "Club de Ajedrez",
    desc: "Jueves 2:00-3:00pm. Biblioteca",
    responsable: "Lic. Roberto Rincón",
    alumnos: 17,
    img: "/ajedrez.png",
    verificado: true
  },
  { nombre: "Club de Artes",
    desc: "Sábado 9:00-11:00am. Biblioteca",
    responsable: "Mtro. Juan Martínez",
    alumnos: 20, img: "/artes.png",
    verificado: true },
  { nombre: "Danza Folklórica",
    desc: "Lunes 12:00-1:00pm. Cancha Polivalente", responsable: "Mtro. Brayan López", alumnos: 19, img: "img/danza.jpg", verificado: true },
  { nombre: "Club de Música", desc: "Jueves 1:00-2:30pm. Laboratorio de Biología", responsable: "Ing. Jaqueline Garza", alumnos: 10, img: "/musica.png", verificado: true },
  { nombre: "Periodismo", desc: "Sábado 10:00-11:30am. Aula 410", responsable: "Lic. Román Garza", alumnos: null, img: "periodismo.jpg", verificado: false },
  { nombre: "Club de Lectura", desc: "Miércoles 1:00-1:50pm. Biblioteca", responsable: "Lic. Lesly González", alumnos: null, img: "/lectura.png", verificado: false },
  { nombre: "Club de Videojuegos", desc: "Sábado 10:00-12:00pm. Sala de Programación Web", responsable: "Mtro. Juan Martínez", alumnos: null, img: "/videojuegos.png", verificado: false },
  { nombre: "Lenguaje de Señas", desc: "Sábado 10:00-11:00am. Aula 402", responsable: "Lic. Cecilia García", alumnos: 13, img: "/lenguaje-senas.png", verificado: true },
  { nombre: "EcoBulldog", desc: "Martes 1:00-2:00pm. Laboratorio de Biología", responsable: "Ing. Lucero Hinojosa", alumnos: null, img: "/eco-bulldog.png", verificado: false },
  { nombre: "Taller de Robótica", desc: null, responsable: null, alumnos: 18, img: "/robotica.png", verificado: false }
])

const filteredClubs = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return clubs.value
  return clubs.value.filter(c =>
    c.nombre.toLowerCase().includes(q) ||
    (c.responsable?.toLowerCase().includes(q)) ||
    (c.desc?.toLowerCase().includes(q))
  )
})

const verFotos = (nombre) => alert(`Abrir fotos del área: ${nombre}`)
const verActividades = (nombre) => alert(`Ver actividades realizadas: ${nombre}`)
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

