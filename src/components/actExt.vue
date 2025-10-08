<template>
  <section class="container py-5">
    <h2 class="mb-4">Actividades Extracurriculares</h2>

    <!-- Opcional: buscador rápido -->
    <div class="input-group mb-4">
      <span class="input-group-text">Buscar</span>
      <input v-model="query" type="text" class="form-control" placeholder="Ej. Ajedrez, Música, Robótica...">
    </div>

    <div class="row">
      <div v-for="club in filteredClubs"
           :key="club.nombre"
           class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="club.img" class="card-img-top" :alt="club.nombre">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title mb-0">{{ club.nombre }}</h5>
              <span v-if="club.verificado" class="badge bg-success">Verificado</span>
            </div>
            <p class="mt-2"><strong>Horario:</strong> {{ club.desc || 'Por confirmar' }}</p>
            <p><strong>Responsable:</strong> {{ club.responsable || 'Por confirmar' }}</p>
            <p><strong>Alumnos inscritos:</strong> {{ club.alumnos ?? 'Por confirmar' }}</p>

            <div class="mt-3">
              <button class="btn btn-outline-primary btn-sm me-2"
                      @click="verFotos(club.nombre)">
                Ver fotos del área
              </button>
              <button class="btn btn-primary btn-sm"
                      @click="verActividades(club.nombre)">
                Actividades realizadas
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Estado vacío -->
      <div v-if="filteredClubs.length === 0" class="col-12">
        <div class="alert alert-warning">No se encontraron clubes que coincidan con “{{ query }}”.</div>
      </div>
    </div>
  </section>
</template>

<script setup scoped>
  import { ref, computed } from 'vue'

  // Buscador
  const query = ref('')

  // Listado completo de clubes y talleres
  const clubs = ref([
    // Banda de Guerra
    {
      nombre: "Banda de Guerra",
      desc: "Jueves 5:10-6:50pm, Sábado 12:50-1:30pm. Cancha Polivalente",
      responsable: "Ing. Joel Cuellar",
      alumnos: null,
      img: "/banda-de-guerra.png",
      verificado: false
    },
    // Club de Ajedrez ✅
    {
      nombre: "Club de Ajedrez",
      desc: "Jueves 2:00-3:00pm. Biblioteca",
      responsable: "Lic. Roberto Rincón",
      alumnos: 17,
      img: "/ajedrez.png",
      verificado: true
    },
    // Club de Artes ✅
    {
      nombre: "Club de Artes",
      desc: "Sábado 9:00-11:00am. Biblioteca",
      responsable: "Mtro. Juan Martínez",
      alumnos: 20,
      img: "/artes.png",
      verificado: true
    },
    // Danza Folklórica ✅
    {
      nombre: "Danza Folklórica",
      desc: "Lunes 12:00-1:00pm. Cancha Polivalente",
      responsable: "Mtro. Brayan López",
      alumnos: 19,
      img: "/danza.png",
      verificado: true
    },
    // Club de Música ✅
    {
      nombre: "Club de Música",
      desc: "Jueves 1:00-2:30pm. Laboratorio de Biología",
      responsable: "Ing. Jaqueline Garza",
      alumnos: 10,
      img: "/musica.png",
      verificado: true
    },
    // Periodismo
    {
      nombre: "Periodismo",
      desc: "Sábado 10:00-11:30am. Aula 410",
      responsable: "Lic. Román Garza",
      alumnos: null,
      img: "/periodismo.png",
      verificado: false
    },
    // Club de Lectura
    {
      nombre: "Club de Lectura",
      desc: "Miércoles 1:00-1:50pm. Biblioteca",
      responsable: "Lic. Lesly González",
      alumnos: null,
      img: "/lectura.png",
      verificado: false
    },
    // Club de Videojuegos
    {
      nombre: "Club de Videojuegos",
      desc: "Sábado 10:00-12:00pm. Sala de Programación Web",
      responsable: "Mtro. Juan Martínez",
      alumnos: null,
      img: "/videojuegos.png",
      verificado: false
    },
    // Lenguaje de Señas ✅
    {
      nombre: "Lenguaje de Señas",
      desc: "Sábado 10:00-11:00am. Aula 402",
      responsable: "Lic. Cecilia García",
      alumnos: 13,
      img: "/lenguaje-senas.png",
      verificado: true
    },
    // EcoBulldog
    {
      nombre: "EcoBulldog",
      desc: "Martes 1:00-2:00pm. Laboratorio de Biología",
      responsable: "Ing. Lucero Hinojosa",
      alumnos: null,
      img: "/eco-bulldog.png",
      verificado: false
    },
    // Taller de Robótica
    {
      nombre: "Taller de Robótica",
      desc: null,
      responsable: null,
      alumnos: 18,
      img: "/robotica.png",
      verificado: false
    }
  ])

  // Filtro por texto
  const filteredClubs = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return clubs.value
    return clubs.value.filter(c =>
      c.nombre.toLowerCase().includes(q) ||
      (c.responsable?.toLowerCase().includes(q)) ||
      (c.desc?.toLowerCase().includes(q))
    )
  })

  // Acciones de botones (placeholders)
  const verFotos = (nombre) => {
    // Aquí conectarías a tu galería/route por nombre de club
    alert(`Abrir fotos del área: ${nombre}`)
  }

  const verActividades = (nombre) => {
    // Aquí conectarías a tu sección/route de actividades por club
    alert(`Ver actividades realizadas: ${nombre}`)
  }
</script>

<style scoped>
  .card-img-top {
    height: 180px;
    object-fit: cover;
    background: #f0f4f8;
  }

  .badge {
    font-size: 0.75rem;
  }
</style>
