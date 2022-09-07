<template>
  <searchform></searchform>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="border-2 border-card-img-green-200 border-top border-bottom py-6 d-lg-flex justify-content-lg-between align-items-lg-center">
          <h1 class="text-center text-dark-green m-0">炒玉米筍</h1>
          <button class="d-inline-block text-center mt-3 mt-lg-0 py-2 px-6 btn btn-primary text-own-white rounded-pill align-middle fs-6">
            <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
          </button>
        </div>
        <div class="mt-5 mb-4 d-flex">
          <span class="badge rounded-pill bg-own-bright-blue text-start px-4 py-3 me-3 fs-6"><i class="fa-solid fa-clock me-2"></i>可放置</span>
          <span class="badge rounded-pill bg-own-orange text-start px-4 py-3 fs-6"><i class="fa-solid fa-carrot me-2"></i>素</span>
        </div>
        <div>
          <div class="recipesContent-img d-none d-lg-block" style="background-image:url('https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E7%8E%89%E7%B1%B3%E7%AD%8D.jpg?raw=true')"></div>
          <img class="img-fluid rounded-2 border border-2 border-card-img-green-200 float-lg-start d-lg-none"
          src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E7%8E%89%E7%B1%B3%E7%AD%8D.jpg?raw=true"
                        alt="炒玉米筍.jpg">
        </div>
        <div class="text-start mt-lg-20 mt-10">
          <ul class="text-dark-green recipecContent-after">
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">時間</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">10 分鐘</p>
            </li>
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">人數</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">1 / 人</p>
            </li>
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">食材</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">玉米筍 0.5盒</p>
            </li>
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">醬料</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">鹽</p>
            </li>
            <li class="d-flex align-items-center">
              <h2 class="m-0 pe-4 pe-lg-10">設備</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">無</p>
            </li>
          </ul>
        </div>
        <div class="mt-15">
          <ul class="text-dark-green">
            <li class="d-flex align-items-start mb-7">
              <span class="py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">1</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">將玉米筍切半、蒜頭去殼</p>
            </li>
            <li class="d-flex align-items-start mb-7">
              <span class="py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">2</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">平底鍋，大火熱油 2 分鐘</p>
            </li>
            <li class="d-flex align-items-start mb-7">
              <span class="py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">3</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">加入蒜頭爆香 1 分鐘</p>
            </li>
            <li class="d-flex align-items-start mb-7">
              <span class="py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">4</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">轉小火，加入玉米筍，拌炒一下後蓋鍋(3分鐘)</p>
            </li>
            <li class="d-flex align-items-start mb-7">
              <span class="py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">5</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">加入一湯匙的水、一些鹽</p>
            </li>
            <li class="d-flex align-items-start mb-7">
              <span class="py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">6</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">拌炒後蓋鍋 2 分鐘，即可起鍋</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="recipesContent-bg mb-20">
    <div class="container">
      <div class="row justify-content-center mt-20">
      <div class="col-lg-11">
        <div class="p-7 text-own-white position-relative">
          <h2 class="d-block d-md-inline-block py-md-5 pe-md-3 drop-shadow">炒玉米筍</h2>
          <h5 class="d-inline-block drop-shadow">的小筆記</h5>
          <div class="drop-shadow mb-10 mt-5 mt-md-0">
            <p class="fw-bold">也可以嘗試把蒜頭換成奶油，煎起來的玉米筍別有風味！</p>
            <p class="fw-bold">第5步驟加水是為了避免玉米筍煎一煎後太乾了</p>
          </div>
          <button class="position-absolute bottom-0 start-50 translate-middle-x
          d-inline-block text-center mt-3 mt-lg-0 py-2 px-6 btn btn-primary text-own-white rounded-pill align-middle fs-6">
            <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="container my-10 pt-lg-10 pt-md-5 pb-10">
    <div class="row justify-content-center">
      <div class="col-lg-8">
      <h2 class="text-dark-green text-start">你也許會喜歡</h2>
        <recipesswiper></recipesswiper>
      </div>
    </div>
  </div>
</template>
<script>
import searchform from '@/components/SearchForm.vue'
import recipesswiper from '@/components/recipesSwiper.vue'
export default {
  components: {
    searchform,
    recipesswiper
  }
}
</script>
