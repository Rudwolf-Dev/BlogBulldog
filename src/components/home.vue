<template>
  <div>
    <!-- Encabezado superior -->
    <header class="bg-primary text-white py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <img alt="Uanl" />
        <h1 class="display-3 fw-bold">BLOG BULLDOG</h1>
        <img alt="EIAO" />
      </div>
      <h4 class="text-md-center">EIAO Linares</h4>
    </header>

    <!-- Título central con logo/mascota -->
    <section class="text-center my-5">
      <h1 class="display-3 fw-bold">BLOG BULLDOG</h1>
      <div class="d-flex justify-content-center align-items-center mt-3">
        <!-- Burbuja de diálogo -->
        <div class="speech-bubble me-3">
          <p class="mb-0">¡Bienvenido!</p>
        </div>
        <!-- Mascota/logo -->
        <img src="" alt="Bulldog" width="100">
      </div>
    </section>
      <div>
        <h2 class="text-center mb-5 fw-bold">NUESTRAS ACTIVIDADES EXTRACURRICULARES</h2>

        <!-- Clubs -->
        <section class="container my-5">
          <h3 class="text-center mb-4 text-primary">Clubs</h3>
          <div class="row g-4">
            <div v-for="taller in talleres" :key="taller.nombre" class="col-md-6">
              <div class="actividad-card">
                <!-- Círculo -->
                <div class="circle me-3">
                  <span>{{ taller.nombre[0] }}</span>
                </div>
                <!-- Texto -->
                <div class="flex-grow-1">
                  <h5 class="actividad-titulo">{{ taller.nombre }}</h5>
                  <p class="actividad-desc">{{ taller.descripcion }}</p>
                  <!-- Bulldog narrador -->
                  <div class="d-flex align-items-start mt-3">
                    <img src="" alt="Bulldog" class="bulldog-img me-3">
                    <div class="speech-bubble">
                      <p class="mb-0">{{ taller.introduccion }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Deportes -->
        <section class="container my-5">
          <h3 class="text-center mb-4 text-primary">Deportes</h3>
          <div class="row g-4">
            <div v-for="deporte in deportes" :key="deporte.nombre" class="col-md-6">
              <div class="actividad-card">
                <!-- Círculo -->
                <div class="circle me-3">
                  <span>{{ deporte.nombre[0] }}</span>
                </div>
                <!-- Texto -->
                <div class="flex-grow-1">
                  <h5 class="actividad-titulo">{{ deporte.nombre }}</h5>
                  <p class="actividad-desc">{{ deporte.descripcion }}</p>
                  <!-- Bulldog narrador -->
                  <div class="d-flex align-items-start mt-3">
                    <img src="" alt="Bulldog" class="bulldog-img me-3">
                    <div class="speech-bubble">
                      <p class="mb-0">{{ deporte.introduccion }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </template>

    <script setup scoped>
      import { ref } from 'vue'

      const talleres = ref([
        { nombre: "Banda de Guerra", descripcion: "Disciplina y ritmo en cada toque.", introduccion: "Aquí aprenderás a coordinarte y representar con orgullo a la escuela." },
        { nombre: "Club de Ajedrez", descripcion: "Estrategia y concentración.", introduccion: "Un espacio para mentes brillantes que disfrutan del reto intelectual." },
        { nombre: "Club de Artes", descripcion: "Creatividad en cada trazo.", introduccion: "Si te gusta pintar, dibujar o crear, este es tu lugar." },
        { nombre: "Danza Folklórica", descripcion: "Tradición y cultura en movimiento.", introduccion: "Bailarás con orgullo nuestras raíces mexicanas." },
        { nombre: "Club de Música", descripcion: "Melodías que inspiran.", introduccion: "Aquí podrás tocar, cantar y compartir tu talento musical." },
        { nombre: "Periodismo", descripcion: "Comunicación y expresión.", introduccion: "Aprenderás a contar historias y dar voz a tu comunidad." },
        { nombre: "Club de Lectura", descripcion: "Un viaje a través de los libros.", introduccion: "Descubre mundos nuevos en cada página." },
        { nombre: "Club de Videojuegos", descripcion: "Diversión y estrategia digital.", introduccion: "Comparte tu pasión gamer con otros compañeros." },
        { nombre: "Lenguaje de Señas", descripcion: "Comunicación inclusiva.", introduccion: "Aprenderás a expresarte y conectar con más personas." },
        { nombre: "EcoBulldog", descripcion: "Cuidado del medio ambiente.", introduccion: "Juntos podemos hacer un cambio positivo en nuestra escuela." },
        { nombre: "Taller de Robótica", descripcion: "Innovación y tecnología.", introduccion: "Construye, programa y da vida a tus ideas." }
      ])

      const deportes = ref([
        { nombre: "Softbol y Béisbol", descripcion: "Trabajo en equipo y precisión.", introduccion: "Un deporte lleno de energía y estrategia." },
        { nombre: "Handball", descripcion: "Velocidad y coordinación.", introduccion: "Perfecto para quienes disfrutan la acción rápida." },
        { nombre: "Fútbol Asociación", descripcion: "Pasión y compañerismo.", introduccion: "El deporte rey, donde cada gol une a todos." },
        { nombre: "Básquetbol", descripcion: "Agilidad y puntería.", introduccion: "Cada enceste es un logro compartido." },
        { nombre: "Voleibol de Sala", descripcion: "Trabajo en equipo y reflejos.", introduccion: "Un juego dinámico que fortalece la unión." },
        { nombre: "Tochito Bandera", descripcion: "Velocidad y estrategia.", introduccion: "Diversión asegurada en cada jugada." }
      ])
    </script>

    <style scoped>
      /* Tarjeta de actividad */
      .actividad-card {
        display: flex;
        align-items: flex-start;
        background: #ffffff;
        border: 1px solid #dee2e6;
        border-radius: 12px;
        padding: 20px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

        .actividad-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }

      /* Círculo */
      .circle {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #0d6efd;
        color: white;
        font-size: 1.6rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Títulos y descripciones */
      .actividad-titulo {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 6px;
      }

      .actividad-desc {
        font-size: 0.95rem;
        color: #555;
        margin-bottom: 0;
      }

      /* Bulldog narrador */
      .bulldog-img {
        width: 60px;
        height: auto;
      }

      .speech-bubble {
        position: relative;
        background: #f8f9fa;
        border: 2px solid #0d6efd;
        border-radius: 10px;
        padding: 10px 14px;
        max-width: 300px;
        font-size: 0.9rem;
        line-height: 1.4;
      }

        .speech-bubble::after {
          content: "";
          position: absolute;
          left: -12px;
          top: 15px;
          border-width: 12px;
          border-style: solid;
          border-color: transparent #0d6efd transparent transparent;
        }
    </style>
