<template>
  <nav class="navbar navbar-expand-lg nav-bulldog">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center text-white fw-bold" to="/">
        <img src="" alt="logo" width="40" class="me-2">
        BLOG BULLDOG
      </router-link>

      <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/">Inicio icono</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/actExt">Actividades Extracurriculares</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/deportes">Equipos Representativos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/info">Información</router-link>
          </li>
        </ul>
<!--
        <button
          id="btnTema"
          @click="cambiarTema"
          class="btn btn-sm ms-3"
          :class="tema == 'light' ? 'btn-outline-light' : 'btn-outline-warning'"
        >
          <i :class="tema == 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'"></i>
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tema = ref('light')

function aplicarTema(nuevoTema) {
  tema.value = nuevoTema
  document.body.setAttribute('data-bs-theme', tema.value)
}

function cambiarTema() {
  aplicarTema(tema.value === 'light' ? 'dark' : 'light')
  localStorage.setItem('tema', tema.value)
}

onMounted(() => {
  const temaGuardado = localStorage.getItem('tema')
  if (temaGuardado) {
    aplicarTema(temaGuardado)
    return
  }

  const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)')
  aplicarTema(prefiereOscuro.matches ? 'dark' : 'light')
  prefiereOscuro.addEventListener('change', (e) => {
    aplicarTema(e.matches ? 'dark' : 'light')
  })
})
</script>

<style scoped>
.nav-bulldog {
  /* Fondo principal: El rojo/vino oscuro de la paleta. */
  background-color: #a30e1a;
  /* Borde de acento: El amarillo brillante. */
  border-bottom: 4px solid #ffc83a;
  /* Mantengo las fuentes y espaciado originales. */
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.5px;
}

.nav-bulldog .nav-link {
  transition: background-color 0.2s, color 0.2s;
}

.nav-bulldog .nav-link:hover,
.nav-bulldog .router-link-active {
  /* Fondo al pasar el ratón/activo: El amarillo brillante. */
  background-color: #ffc83a;
  /* Color del texto: Negro para un contraste claro sobre el amarillo. */
  color: #000000 !important;
  border-radius: 4px;
}
</style>
