<template>
<div>
  <app-top-bar></app-top-bar>
  <div class="d-flex align-items-stretch">
    <app-side-bar></app-side-bar>
    <router-view></router-view>
  </div>
<app-footer></app-footer>
</div>
</template>

<script>
  import Login from './Auth/Login.vue'
  import MainDashboard from './components/MainAdmin/Dashboard.vue'
  import SideBar from './components/MainAdmin/SideBar.vue'
  import TopBar from './components/MainAdmin/TopBar.vue'
  import Footer from './components/MainAdmin/Footer.vue'
export default {
  components :{
    appLogin : Login,
    appMainDashboard : MainDashboard,
    appSideBar : SideBar,
    appTopBar : TopBar,
    appFooter : Footer
  }
}
</script>

<style>

</style>
