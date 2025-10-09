<template>
  <section class="container py-5">
    <h2 class="mb-4">Equipos Representativos</h2>

    <!-- Buscador -->
    <div class="input-group mb-4">
      <span class="input-group-text">Buscar</span>
      <input v-model="query" type="text" class="form-control" placeholder="Ej. Fútbol, Voleibol, Handball...">
    </div>

    <div class="row">
      <div v-for="equipo in filteredEquipos"
           :key="equipo.nombre"
           class="col-md-6 mb-4">
        <div class="card h-100 border-primary shadow">
          <img :src="equipo.img" class="card-img-top" :alt="equipo.nombre">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title text-primary mb-0">{{ equipo.nombre }}</h5>
            </div>
            <p class="mt-2"><strong>Descripción:</strong> {{ equipo.desc || 'Por confirmar' }}</p>
            <p><strong>Entrenador:</strong> {{ equipo.entrenador || 'Por confirmar' }}</p>

            <div class="mt-3">
              <button class="btn btn-outline-primary btn-sm me-2" @click="verFotos(equipo.nombre)">
                Ver fotos del área
              </button>
              <button class="btn btn-primary btn-sm" @click="verEntrenamientos(equipo.nombre)">
                Entrenamientos
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Estado vacío -->
      <div v-if="filteredEquipos.length === 0" class="col-12">
        <div class="alert alert-warning">No se encontraron equipos que coincidan con “{{ query }}”.</div>
      </div>
    </div>
  </section>
</template>

<script setup scoped>
  import { ref, computed } from 'vue'

  const query = ref('')

  const equipos = ref([
    {
      nombre: "Tochito Bandera",
      desc: "Varonil y Femenil. Mar, Mié, Jue y Sáb",
      entrenador: "Lic. Román Garza",
      img: "./src/assets/img/tochito.jpg",
    },
    {
      nombre: "Softbol y Béisbol",
      desc: "Varonil y Femenil. Mar-Jue 5:30-7:00pm. Polideportivo Tigers UANL Linares",
      entrenador: "Erick Martínez",
      img: "/softbol.png",
    },
    {
      nombre: "Handball",
      desc: "Varonil. Lunes y Viernes 6:00-7:30pm. Cancha Polivalente EIAO",
      entrenador: "Lic. Roberto Rincón",
      img: "./src/assets/img/handball.jpg",
    },
    {
      nombre: "Fútbol Asociación",
      desc: "Varonil y Femenil. Mar-Jue 6:00-7:30pm. Campos EIAO Unidad Linares",
      entrenador: "Lic. Roberto Rincón",
      img: "./src/assets/img/Fut.jpg",
    },
    {
      nombre: "Básquetbol",
      desc: "Varonil y Femenil. Mar, Jue y Sáb",
      entrenador: "Emiliano Rodríguez",
      img: "./src/assets/img/basquet.jpg",
    },
    {
      nombre: "Voleibol de Sala",
      desc: "Varonil y Femenil. Mar-Jue 1:00-2:30pm, Lun-Vie 6:30-7:30pm, Sáb (Femenil 9:30-10:30am, Varonil 11:00-1:00pm). Cancha Polivalente EIAO",
      entrenador: "Lic. Brayan López",
      img: "./src/assets/img/volei.jpg",
    }
  ])

  // Filtro por texto
  const filteredEquipos = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return equipos.value
    return equipos.value.filter(e =>
      e.nombre.toLowerCase().includes(q) ||
      (e.entrenador?.toLowerCase().includes(q)) ||
      (e.desc?.toLowerCase().includes(q))
    )
  })

  // Acciones de botones (placeholders)
  const verFotos = (nombre) => {
    alert(`Abrir fotos del área: ${nombre}`)
  }

  const verEntrenamientos = (nombre) => {
    alert(`Ver entrenamientos de: ${nombre}`)
  }
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
