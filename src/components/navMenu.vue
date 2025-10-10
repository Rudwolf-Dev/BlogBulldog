<template>
  <nav class="navbar navbar-expand-lg nav-bulldog">
    <div class="container-fluid">
      <router-link class="no-bg navbar-brand d-flex align-items-center text-white fw-bold p-2" to="/">
        BLOG BULLDOG
      </router-link>

      <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse hover-secondary" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/actExt">Actividades Extracurriculares</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/equiposRep">Equipos Representativos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-semibold px-3" to="/videoJuegos">VideoJuegos</router-link>
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


<style scoped>
.nav-bulldog {
  /* Fondo principal: El rojo/vino oscuro de la paleta. */
  background-color: var(--color-accent);
  /* Borde de acento: El amarillo brillante. */
  border-bottom: 4px solid var(--color-card);
  /* Mantengo las fuentes y espaciado originales. */
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.5px;
}

.nav-bulldog .nav-link {
  transition: background-color 0.2s, color 0.2s;
  margin: 0 10px 0 10px;
}

.nav-bulldog .nav-link:hover,
.nav-bulldog .router-link-active {
  /* Fondo al pasar el ratón/activo: El amarillo brillante. */
  /* Color del texto: Negro para un contraste claro sobre el amarillo. */
  color: white;
  border-radius: 4px;
}

.hover-secondary .router-link-active,
.hover-secondary .nav-link:hover {
  background-color: var(--color-accent-secondary);
   color: #000000 !important;
}
</style>
