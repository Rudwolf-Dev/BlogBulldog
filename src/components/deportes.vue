<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="section-title hammersmith-one-regular py-4 d-flex justify-content-between align-items-center"
  >
    <h2 class="container text-center fw-bold">Equipos Representativos</h2>
  </section>

  <!-- Buscador -->
  <section class="container py-5">
    <div class="input-group mb-4">
      <span class="input-group-text">Buscar</span>
      <input
        v-model="query"
        type="text"
        class="form-control"
        placeholder="Ej. Fútbol, Voleibol, Handball..."
      />
    </div>

    <div class="row">
      <div
        v-for="equipo in filteredEquipos"
        :key="equipo.nombre"
        :id="equipo.id"
        class="col-md-6 mb-4"
      >
        <div class="card h-100 border-primary shadow">
          <img :src="equipo.img" class="card-img-top" :alt="equipo.nombre" />
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title text-primary mb-0">{{ equipo.nombre }}</h5>
            </div>
            <p class="mt-2"><strong>Descripción:</strong> {{ equipo.desc || 'Por confirmar' }}</p>
            <p><strong>Entrenador:</strong> {{ equipo.entrenador || 'Por confirmar' }}</p>

            <div class="mt-3">
              <button
                class="btn btn-outline-primary btn-sm me-2 w-100"
                @click="verFotos(equipo.nombre)"
              >
                Ver fotos del área
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Estado vacío -->
      <div v-if="filteredEquipos.length === 0" class="col-12">
        <div class="alert alert-warning">
          No se encontraron equipos que coincidan con “{{ query }}”.
        </div>
      </div>
    </div>
    <!-- Modal con Carrusel -->
    <div
      class="modal fade"
      id="modalFotos"
      tabindex="-1"
      aria-labelledby="modalFotosLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFotosLabel">Fotos del Club</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div class="modal-body">
            <div id="carouselFotos" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div
                  v-for="(img, index) in imagenesActuales"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <img :src="img" class="d-block w-100 rounded" alt="Foto del club" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselFotos"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselFotos"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup scoped>
import { ref, computed } from 'vue'
import * as bootstrap from 'bootstrap'

const imagenesDeportes = {
  'Tochito Bandera': ['tochito.jpg'],
  'Softbol y Béisbol': ['softball.jpeg', 'beisbol.jpg'],
  Handball: ['handball.jpg'],
  'Fútbol Asociación': ['Fut.jpg', 'fut2.jpg'],
  Básquetbol: ['basquet.jpg'],
  'Voleibol de Sala': ['voleibol.jpg'],
}

const imagenesActuales = ref([])

const verFotos = (nombre) => {
  imagenesActuales.value = imagenesDeportes[nombre] || []
  if (imagenesActuales.value.length > 0) {
    const modal = new bootstrap.Modal(document.getElementById('modalFotos'))
    modal.show()
  } else {
    alert('No hay imágenes disponibles para este equipo.')
  }
}

const query = ref('')

const equipos = ref([
  {
    nombre: 'Tochito Bandera',
    id: 'Toch',
    desc: 'Varonil y Femenil. Mar, Mié, Jue y Sáb',
    entrenador: 'Lic. Román Garza',
    img: 'tochito.jpg',
  },
  {
    nombre: 'Softbol y Béisbol',
    id: 'Soft',
    desc: 'Varonil y Femenil. Mar-Jue 5:30-7:00pm. Polideportivo Tigers UANL Linares',
    entrenador: 'Erick Martínez',
    img: 'softball.jpeg',
  },
  {
    nombre: 'Handball',
    id: 'Hand',
    desc: 'Varonil. Lunes y Viernes 6:00-7:30pm. Cancha Polivalente EIAO',
    entrenador: 'Lic. Roberto Rincón',
    img: 'handball.jpg',
  },
  {
    nombre: 'Fútbol Asociación',
    id: 'Fut',
    desc: 'Varonil y Femenil. Mar-Jue 6:00-7:30pm. Campos EIAO Unidad Linares',
    entrenador: 'Lic. Roberto Rincón',
    img: 'Fut.jpg',
  },
  {
    nombre: 'Básquetbol',
    id: 'Basq',
    desc: 'Varonil y Femenil. Mar, Jue y Sáb',
    entrenador: 'Emiliano Rodríguez',
    img: 'basquet.jpg',
  },
  {
    nombre: 'Voleibol de Sala',
    id: 'Vol',
    desc: 'Varonil y Femenil. Mar-Jue 1:00-2:30pm, Lun-Vie 6:30-7:30pm, Sáb (Femenil 9:30-10:30am, Varonil 11:00-1:00pm). Cancha Polivalente EIAO',
    entrenador: 'Lic. Brayan López',
    img: 'volei.jpg',
  },
])

// Filtro por texto
const filteredEquipos = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return equipos.value
  return equipos.value.filter(
    (e) =>
      e.nombre.toLowerCase().includes(q) ||
      e.entrenador?.toLowerCase().includes(q) ||
      e.desc?.toLowerCase().includes(q),
  )
})
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
}

.card {
  background-color: var(--card-bg);
  border-color: var(--card-border);
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
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
