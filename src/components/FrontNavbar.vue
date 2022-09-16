<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-bright-green sticky-top shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        <router-link @click="closeMenu" to="/">
          <img src="../libs/img/logo/logo-navbar.svg" width="140" alt="輕鬆煮廚logo.img" />
        </router-link>
      </a>
      <div class="d-flex align-items-center">
        <router-link @click="closeMenu" class="nav-link ms-4 d-inline-block d-lg-none me-1" to="/myOrder">
            <i class="fa-solid fa-utensils fs-5 text-primary"></i>
            </router-link>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fs-6">
          <router-link @click="closeMenu" to="readInstructions" class="nav-link">閱讀說明</router-link>
          <router-link @click="closeMenu" class="nav-link" to="/about">關於輕鬆煮廚</router-link>
          <router-link @click="closeMenu" class="nav-link" to="/foodAndSupplies">食材與廚房用品</router-link>
          <router-link @click="closeMenu" to="myOrder" class="nav-link ms-4 d-none d-lg-inline-block">
            <i class="fa-solid fa-utensils fs-5"></i>
            餐點
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  .navbar-toggler:focus {
    box-shadow: 0 0 0 0; }
</style>
<script>
import { Collapse } from 'bootstrap'
export default {
  methods: {
    closeMenu () {
      const myCollapse = document.getElementById('navbarNavAltMarkup')
      const bsCollapse = new Collapse(myCollapse, {
        toggle: false
      })
      bsCollapse.hide()
    }
  }
}
</script>
