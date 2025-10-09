<template>
  <div class="home-bulldog">

    <!-- Encabezado superior -->
    <header class="header-bulldog text-white py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <img src="./../assets/img/UANL-logo.png" alt="UANL" height="100" />
        <div class="text-center">
          <h1 class="fw-bold title-bulldog">BLOG BULLDOG</h1>
          <h4 class="fw-semibold mb-0">EIAO Linares</h4>
        </div>
        <img src="./../assets/img/EIAO-logo.png" alt="EIAO" height="100" />
      </div>
    </header>

    <!-- Bloque de bienvenida -->
    <section class="welcome-section text-center">
      <div class="">
        <div class="speech-wrapper d-flex align-items-center mx-0">
          <img srcset="" src="./../assets/img/Bulldog.png" class="bulldog-img" alt="Bulldog" width="300">
          <div class="speech-bubble-main me-3">
            <p class="mb-0 fw-semibold">¡Bienvenido!</p>
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
          <div class="actividad-card">
            <div class="circle">
              <span>{{ taller.nombre[0] }}</span>
            </div>
            <p class="actividad-nombre">{{ taller.nombre }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deportes -->
    <section class="container my-5">
      <h3 class="fw-bold text-uppercase mb-4">Deportes</h3>
      <div class="row g-4 justify-content-center">
        <div v-for="deporte in deportes" :key="deporte.nombre" class="col-lg-4 col-md-6">
          <div class="actividad-card">
            <div class="circle">
              <span>{{ deporte.nombre[0] }}</span>
            </div>
            <p class="actividad-nombre">{{ deporte.nombre }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const talleres = ref([
  { nombre: "Banda de Guerra" },
  { nombre: "Club de Ajedrez" },
  { nombre: "Club de Artes" },
  { nombre: "Danza Folklórica" },
  { nombre: "Club de Música" },
  { nombre: "Periodismo" },
  { nombre: "Club de Lectura" },
  { nombre: "Club de Videojuegos" },
  { nombre: "Lenguaje de Señas" },
  { nombre: "EcoBulldog" },
  { nombre: "Taller de Robótica" }
])

const deportes = ref([
  { nombre: "Softbol y Béisbol" },
  { nombre: "Handball" },
  { nombre: "Fútbol Asociación" },
  { nombre: "Básquetbol" },
  { nombre: "Voleibol de Sala" },
  { nombre: "Tochito Bandera" }
])
</script>

<style scoped>
/*
 * NOTA: Este código utiliza las variables definidas en la configuración global de temas:
 * --color-bg, --color-text, --color-card, --color-accent, --color-accent-secondary, --color-blue
*/

.home-bulldog {
  /* Fondo principal: Usa el color de fondo general del tema. */
  background-color: var(--color-bg);
  font-family: 'Open Sans', sans-serif;
}

/* ---------- ENCABEZADO ---------- */
.header-bulldog {
  /* Fondo: Acento principal (Rojo oscuro en claro, Amarillo brillante en oscuro) */
  background-color: var(--color-accent);
  /* Borde inferior: Acento secundario (Amarillo brillante en claro, Rojo oscuro en oscuro) */
  border-bottom: 6px solid var(--color-card);
  /* Color del texto: Fijo en blanco o color de tarjeta para contraste sobre el fondo acentuado */
  color: var(--color-card);
  text-align: center;
}

.title-bulldog {
  font-size: 2.8rem;
  letter-spacing: 1px;
}

/* ---------- BURBUJA DE BIENVENIDA ---------- */
.speech-wrapper img{
  background: url('./../assets/img/bulldog-back');
  border-radius: 5% 45% 0 0;
  margin-right: 45px;
}

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
  padding: 30px 0;
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

</style>
