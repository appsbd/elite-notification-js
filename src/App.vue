<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="icon-menu-bars" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </symbol>
  </svg>
  <div class="container-fluid mt-3">
    <app-loader v-if="isLoading"></app-loader>
    <AppContainer v-else :is-min="isMinMenu" app-unique-id="vtpos">
      <template v-slot:app-logo>
        <router-link to="/" class=" link-dark text-decoration-none">
          <i class="vps vps-vite-pos"></i>
          <span class="apbd-app-title">
            <i class="vps vps-vt-pos"></i>
          </span>
        </router-link>

      </template>

      <template v-slot:main-menu>
        <Sidebar />
      </template>

      <template v-slot:app-content-header>
        <a href="/" class="d-flex align-items-center link-dark text-decoration-none">
                <span class="fs-4 apbd-menu-title">
                  {{ this.$translateGettext($route.meta.title) }}
                </span>
        </a>

      </template>
      <template v-slot:app-body>
        <router-view/>

      </template>

    </AppContainer>
  </div>
</template>
<script>
import AppContainer from '@/components/AppContainer.vue'
import AppLoader from "@/components/AppLoader";
import Sidebar from "@/components/Sidebar";
export default {
  name: 'App',
  components: {
    Sidebar,
    AppLoader,
    AppContainer
  },
  data() {
    return {
      isLoading: false,
      isMinMenu: false
    }
  },
  computed: {},
  mounted() {

  }
}
</script>
