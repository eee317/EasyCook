<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-bright-green fixed-top shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        <router-link to="/">
          <img src="../libs/img/logo/logo-navbar.svg" width="140" alt="輕鬆煮廚logo.img" />
        </router-link>
      </a>
      <div class="d-flex align-items-center">
        <a class="nav-link ms-4 d-inline-block d-lg-none me-1" href="#">
            <i class="fa-solid fa-utensils fs-5 text-primary"></i>
            </a>
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
          <a class="nav-link" href="#">閱讀說明</a>
          <a class="nav-link" href="#">關於輕鬆煮廚</a>
          <a class="nav-link" href="#">食材與廚房用品</a>
          <a class="nav-link ms-4 d-none d-lg-inline-block" href="#">
            <i class="fa-solid fa-utensils fs-5"></i>
            餐點</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  .navbar-toggler:focus {
    box-shadow: 0 0 0 0; }
</style>
