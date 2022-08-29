<template>
  <div class="container">
    <img class="img-fluid mt-20" width="300"
    src="../../libs/img/logo/logo-navbar.svg" alt="輕鬆煮廚logo.img">
  </div>
  <div class="container">
    <div class="row mt-10 justify-content-center">
      <div class="col-md-4">
        <div class="d-flex flex-column align-items-center">
          <input type="search" class="form-control shadow w-75 w-md-100 mb-6 py-3 py-md-5 px-5 px-md-7 fs-5 text-primary border-0 rounded-pill " placeholder="搜尋食譜">
          <div class="w-75 w-md-100">
            <div class="dropdown ">
              <button class="btn btn-own-white dropdown-toggle shadow text-start text-primary w-100 py-3 py-md-5 px-5 px-md-7 fs-5 rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                選擇食材
              </button>
              <ul class="dropdown-menu border-0 w-75 ms-8 mb-2 fs-5" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item text-primary" href="#">雞蛋</a></li>
                <li><a class="dropdown-item text-primary" href="#">地瓜</a></li>
                <li><a class="dropdown-item text-primary" href="#">玉米筍</a></li>
              </ul>
            </div>
          </div>
          <input type="button" value="搜尋" class="mt-6 fs-5 px-7 btn btn-primary rounded-pill text-own-white">
        </div>
      </div>
    </div>
  </div>
  <main>
    <section class="index-bg mt-10 ">
      <div class="container">
        <div class="row">
          <div>
            <p class="fw-bolder text-letter-3 pt-20 h1 mb-5">夏日推薦</p>
            <ul class="w-100 m-0 p-3">
              <li class="mb-5">
                <div class="card rounded-2 px-5 border-own-yellow bg-own-skin">
                  <div class="d-flex align-items-center">
                    <img class="img-fluid w-25 h-25 rounded-2 border border-own-yellow"
                    src="../../libs/img/recipe/百香果汁.jpg" alt="百香果汁.jpg">
                    <div class="card-body text-start text-own-brown">
                      <h5 class="card-title">百香果汁</h5>
                      <p class="card-text m-0">5分鐘</p>
                      <p class="card-text m-0">食材：百香果、水</p>
                      <p class="card-text m-0">醬料：蜂蜜</p>
                    </div>
                    <button class="btn text-primary">
                      <i class="fa-solid fa-utensils fs-5"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li class="mb-5">
                <div class="card rounded-2 py-3 px-5 border-own-yellow bg-own-skin">
                  <div class="d-flex align-items-center">
                    <img class="img-fluid w-25 h-25 rounded-2 border border-own-yellow"
                    src="../../libs/img/recipe/西西里檸檬氣泡飲.jpg" alt="西西里檸檬氣泡飲.jpg">
                    <div class="card-body text-start text-own-brown">
                      <h5 class="card-title">西西里檸檬氣泡飲</h5>
                      <p class="card-text m-0">5分鐘</p>
                      <p class="card-text m-0">食材：雪碧、咖啡、檸檬</p>
                    </div>
                    <button class="btn text-primary">
                      <i class="fa-solid fa-utensils fs-5"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li class="mb-5">
                <div class="card rounded-2 py-3 px-5 border-own-yellow bg-own-skin">
                  <div class="d-flex align-items-center">
                    <img class="img-fluid w-25 h-25 rounded-2 border border-own-yellow"
                    src="../../libs/img/recipe/百香果汁.jpg" alt="百香果汁.jpg">
                    <div class="card-body text-start text-own-brown">
                      <h5 class="card-title">玉米沙拉</h5>
                      <p class="card-text m-0">5分鐘</p>
                      <p class="card-text m-0">食材：玉米、沙拉醬</p>
                    </div>
                    <button class="btn text-primary">
                      <i class="fa-solid fa-utensils fs-5"></i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
    <section>
      <h1>123</h1>
    </section>
  </main>

</template>
<style lang="scss" scoped>
.index-bg {
  background: url('../../libs/img/bgImg/index-bg-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  max-width: 100%;
}
</style>
