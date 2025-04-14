<template>
  <ul class="apbd-main-menu" @click="">
    <li>
      <router-link to="/" class="">
        <i class="vps vps-dashboard-a"></i>
        <span class="apbd-menu-title" v-translate>Dashboard</span>
      </router-link>
    </li>
    <li>
      <router-link to="/source" class="">
        <i class="vps  vps-asterisk-1"></i>
        <span class="apbd-menu-title" v-translate>Sources</span>
      </router-link>
    </li>
    <li>
      <router-link to="/dummy_notification" class="">
        <i class="vps vps-des-notification"></i>
        <span class="apbd-menu-title" v-translate>Notification</span>
      </router-link>
    </li>
    <li>
      <router-link to="/video" class="">
        <i class="vps vps-des-pause"></i>
        <span class="apbd-menu-title" v-translate>Video</span>
      </router-link>
    </li>
    <li>
      <router-link to="/setting" class="">
        <i class="vps  vps-settings"></i>
        <span class="apbd-menu-title" v-translate>Settings</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
name: "Sidebar"
}
</script>

<style scoped>

</style>