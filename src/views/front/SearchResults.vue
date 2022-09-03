<template>
  <searchform></searchform>
  <div class="container mt-10">
    <div class="row">
      <h2 class="text-dark-green text-start">共10道食譜</h2>
      <div class="col-md-6">
        <a href="#" class="text-reset text-decoration-none">
          <div class="card border-0 h-100 bg-card-green-100 p-4 py-lg-6 py-lg-7" style="">
            <div class="row g-0 flex-nowrap align-items-center align-items-lg-start">
              <div class="col-md-4 col-3 line-before">
                <div class=""></div>
                  <img
                      class="w-100
                        w-sm-75 w-lg-75
                        img-fluid
                        border-0
                        rounded-1
                      "
                      src="../../libs/img/recipe/涼拌豆腐.jpg"
                      alt="蛤蠣湯.jpg"
                    />
                  <button class="text-center mt-3 btn btn-primary text-own-white rounded-pill align-middle d-lg-inline-block d-none">
                          <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
                    </button>
              </div>
              <div class="col-md-8 col-9">
                <div class="card-body ms-lg-10 text-start d-flex align-items-center p-0">
                  <div class="card-body p-md-0 text-start text-dark-green ">
                        <h6 class="card-title">西西里檸檬氣泡飲</h6>
                        <p class="card-text m-0">5分鐘</p>
                        <p class="card-text m-0">食材：雪碧、咖啡、檸檬</p>
                      </div>
                  <button class="btn text-primary d-lg-none  w-lg-15">
                        <i class="fa-solid fa-utensils px-2 px-sm-5 px-md-2 fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import searchform from '@/components/SearchForm.vue'
export default {
  components: {
    searchform
  }
}
</script>
