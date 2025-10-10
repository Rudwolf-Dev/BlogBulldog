<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-bulldog">

    <!-- Encabezado superior -->
    <header class="header-bulldog text-white py-3 row">
      <div class="container d-flex justify-content-between align-items-center">
        <img src="./../assets/img/UANL-logo.png" alt="UANL"/>
        <div class="text-center col-6">
          <h1 class="text-black fw-bold title-bulldog">BLOG BULLDOG</h1>
          <h4 class="text-dark fw-semibold mb-0">EIAO Linares</h4>
        </div>
        <img src="./../assets/img/EIAO-logo.png" alt="EIAO"/>
      </div>
    </header>

    <!-- Bloque de bienvenida -->
    <section class="welcome-section text-center">
      <div>
        <div class="speech-wrapper mx-0">
          <img src="./../assets/img/Bulldog.png" class="bulldog-img col-2" alt="Bulldog" width="350px">
          <div class="speech-bubble-main me-3 w-75">
            <p class="fw-semibold">¡Bienvenidos a mi blog!</p>
            <p class="mb-0">
              En este puedes aprender sobre las distintas actividades que se realizan fuera de clases en nuestra unidad EIAO linares. Aquí puedes encontrar información y fotos de todos los clubs y deportes a los que te puedes unir iniciando el semestre, algunos de estos fueron implementados recientemente y han apoyado al crecimiento de las generaciones.
              Hecha un vistazo a nuestras actividades extracurriculares, equipos representativos así como más información sobre el sitio web.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Actividades extracurriculares -->
    <section class="bg-yellow py-5">
      <h2 class="text-center fw-bold text-uppercase">Nuestras Actividades Extracurriculares</h2>
    </section>

    <!-- Clubes -->
    <section class="container my-5">
      <h3 class="fw-bold text-uppercase mb-4">Clubes y Talleres</h3>
      <div class="row g-4 justify-content-center">
        <div v-for="taller in talleres" :key="taller.nombre" class="col-lg-4 col-md-6">
          <a :href="taller.url" class=" text-decoration-none">
            <div class="actividad-card">
            <div class="circle">
              <span>{{ taller.nombre[0] }}</span>
            </div>
            <p class="actividad-nombre">{{ taller.nombre }}</p>
          </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Deportes -->
    <section class="container my-5">
      <h3 class="fw-bold text-uppercase mb-4">Deportes</h3>
      <div class="row g-4 justify-content-center">
        <div v-for="deporte in deportes" :key="deporte.nombre" class="col-lg-4 col-md-6">
          <a :href="deporte.url" class=" text-decoration-none">
            <div class="actividad-card">
            <div class="circle">
              <span>{{ deporte.nombre[0] }}</span>
            </div>
            <p class="actividad-nombre">{{ deporte.nombre }}</p>
          </div>
        </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const talleres = ref([
  { nombre: "Banda de Guerra", url: "/actExt#Banda"},
  { nombre: "Club de Ajedrez", url: "/actExt#Ajedrez" },
  { nombre: "Club de Artes", url: "/actExt#Artes" },
  { nombre: "Danza Folklórica", url: "/actExt#Danza" },
  { nombre: "Club de Música", url: "/actExt#Música" },
  { nombre: "Periodismo", url: "/actExt#Foto" },
  { nombre: "Club de Lectura", url: "/actExt#Lect" },
  { nombre: "Club de Videojuegos", url: "/actExt#Juegos" },
  { nombre: "Lenguaje de Señas", url: "/actExt#Señas" },
  { nombre: "EcoBulldog", url: "/actExt#Eco" },
  { nombre: "Taller de Robótica", url: "/actExt#Robot" }
])

const deportes = ref([
  { nombre: "Softbol y Béisbol", url: "/equiposRep#Soft" },
  { nombre: "Handball", url: "/equiposRep#Hand" },
  { nombre: "Fútbol Asociación", url: "/equiposRep#Fut" },
  { nombre: "Básquetbol", url: "/equiposRep#Basq" },
  { nombre: "Voleibol de Sala", url: "/equiposRep#Vol" },
  { nombre: "Tochito Bandera", url: "/equiposRep#Toch" }
])
</script>

<style scoped>

.home-bulldog {
  /* Fondo principal: Usa el color de fondo general del tema. */
  background-color: var(--color-bg);
  font-family: 'Open Sans', sans-serif;
}

/* ---------- ENCABEZADO ---------- */
.header-bulldog {
  /* Fondo: Acento principal (Rojo oscuro en claro, Amarillo brillante en oscuro) */
  background-color: var(--color-card);
  /* Borde superior: */
  border-top: 20px solid var(--color-bg);
  /* Borde inferior: */
  border-bottom: 5px solid var(--color-orange);
  text-align: center;
}

.header-bulldog img {
  max-height: 100px;
}

/* ---------- BURBUJA DE BIENVENIDA ---------- */
.speech-wrapper {
  margin-top: 20px;
  margin-left: 15px;
}

.speech-bubble-main {
  /* Fondo: Blanco (Color de tarjeta) */
  background: var(--color-card);
  /* Borde: Naranja de la paleta. */
  border-top: 3px solid #5d151b;
  border-left: 3px solid #5d151b;
  border-bottom: 3px solid #fe7200;
  border-right: 3px solid #fe7200;
  border-radius: 12px;
  padding: 14px 20px;
  position: relative;
  font-size: 1.1rem;
  /* Texto: Negro (Color de texto principal) */
  color: var(--color-text);
}

.speech-bubble-main::after {
  content: "";
  position: absolute;
  left: -33px;
  top: 85%;
  transform: translateY(-50%) rotateZ(170deg);
  border-width: 10px;
  border-left: 25px;
  border-style: solid;
  /* Color de la punta: Mismo naranja que el borde */
  border-color: transparent transparent transparent #fe7200;
}

/* Escritorio: imagen a la izquierda, burbuja a la derecha */
.speech-wrapper {
  display: flex;               /* asegura flex aunque esté el d-flex de Bootstrap */
  flex-direction: row;         /* fila en desktop */
  align-items: center;
  justify-content: flex-start; /* burbuja a la derecha del bulldog */
  gap: 1rem;
}

/* Imagen responsiva */
.bulldog-img {
  max-width: 100%;
  height: auto;
}

/* Móviles: burbuja arriba, bulldog abajo; ambos alineados a la izquierda */
@media (max-width: 768px) {
  .speech-wrapper {
    flex-direction: column-reverse;
  }

  .bulldog-img {
    width: 55%;
    max-width: 200px;
  }
  /* Punta de la burbuja apuntando hacia abajo hacia el bulldog */
  .speech-bubble-main::after {
    content: "";
    position: absolute;
    bottom: -18px;                  /* coloca la punta abajo */
    left: 25px;                     /* cerca del borde izquierdo (apuntando al perro) */
    border-width: 10px;
    border-style: solid;
    border-color: #fe7200 transparent transparent transparent;
  }
}


/* ---------- SECCIÓN AMARILLA ---------- */
.bg-yellow {
  /* Fondo: Acento secundario (Amarillo brillante en claro, Rojo oscuro en oscuro) */
  background-color: var(--color-accent-secondary);
  /* Texto: Color de texto principal (Negro en claro, Blanco en oscuro) */
  color: var(--color-text);
  border-top: 12px solid var(--color-blue);
  border-bottom: 6px solid var(--color-orange);
}

/* ---------- TARJETAS DE CLUBES / DEPORTES ---------- */
.actividad-card {
  /* Fondo: Blanco (Color de tarjeta) */
  background: var(--color-card);
  border-radius: 8px;
  padding: 25px 0;
  text-align: center;
  border: none;
  transition: transform 0.2s ease;
  border-bottom: 6px solid var(--color-orange);
}

.actividad-card:hover {
  transform: translateY(-5px);
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* Fondo del círculo: El azul oscuro de la paleta */
  background: var(--color-blue);
  /* Texto del círculo: Blanco (Color de tarjeta) */
  color: var(--color-card);
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
}

.actividad-nombre {
  font-weight: 600;
  /* Texto del nombre: Negro (Color de texto principal) */
  color: var(--color-text);
  font-size: 1rem;
}
.welcome-section {
  background: linear-gradient(
      to right,
      rgb(0, 0, 0) 0%,   /* oscuro en el lado izquierdo */
      rgba(81, 81, 81, 0.727) 30%,  /* transición */
      rgba(0, 0, 0, 0) 60%     /* transparente hacia la derecha */
    ),
    url("./../assets/img/escuela.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
