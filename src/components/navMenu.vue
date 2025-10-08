<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="" alt="" width="40" class="me-2">
        Blog Bulldog
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/actExt">Actividades</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/deportes">Deportes</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/info">Información</router-link></li>
        </ul>

        <button id="btnTema" @click="cambiarTema" :class="tema == 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'">
          <!-- Ícono dinámico: cambia según el tema actual -->
          <i :class="tema == 'light' ? 'bi bi-moon-fill text-dark' : 'bi bi-sun-fill text-light'"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  // Estado reactivo para almacenar el tema actual
  const tema = ref('light')

  /**
   * Aplica el tema recibido y actualiza el atributo
   * data-bs-theme en el <body> para que Bootstrap lo use.
   */
  function aplicarTema(nuevoTema) {
    tema.value = nuevoTema
    document.body.setAttribute('data-bs-theme', tema.value)
  }

  /**
   * Alterna entre modo claro y oscuro.
   * También guarda la preferencia en localStorage.
   */
  function cambiarTema() {
    aplicarTema(tema.value === 'light' ? 'dark' : 'light')
    localStorage.setItem('tema', tema.value)
  }

  /**
   * Al montar el componente:
   * 1. Revisa si hay un tema guardado en localStorage.
   * 2. Si no, detecta la preferencia del sistema (oscuro/claro).
   * 3. Escucha cambios en la preferencia del sistema y actualiza el tema.
   */
  onMounted(() => {
    const temaGuardado = localStorage.getItem('tema')
    if (temaGuardado) {
      aplicarTema(temaGuardado)
      return
    }

    // Detecta si el usuario prefiere modo oscuro
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)')
    aplicarTema(prefiereOscuro.matches ? 'dark' : 'light')

    // Cambia el tema automáticamente si el usuario cambia la preferencia del sistema
    prefiereOscuro.addEventListener('change', (e) => {
      aplicarTema(e.matches ? 'dark' : 'light')
    })
  })
</script>
