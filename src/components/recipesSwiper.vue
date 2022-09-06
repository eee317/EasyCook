<template>
  <swiper
    :slides-per-view="2"
    :pagination="{
      type: '',
    }"
    :loop="true"
    :spaceBetween="30"
    :navigation="true"
    :modules="modules"
    :speed="1000"
    class="mySwiper position-relative"
  >
    <swiper-slide>
      <div class="card bg-bright-green pb-md-5 border-0 text-dark-green">
        <div
          class="
            group-card-area
            card-body
            d-flex
            text-start text-md-start
            align-items-center
            justify-content-between
            flex-md-column
            position-relative
          "
        >
          <div
            class="
              d-flex
              flex-md-column
              align-items-md-start
              ps-md-4
              py-md-4
              align-items-center
              justify-content-start
              index-card-img-bright
            "
          >
            <img
              class="
                img-fluid
                rounded-3
                w-30 w-md-75
                h-25
                border border-card-green-100 border-2
                me-lg-8
                ms-lg-5
                mt-md-3
                m-md-auto
              "
              src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E8%B1%AC%E8%82%89%E8%94%A5%E5%8D%B7.jpg?raw=true"
              alt="蛤蠣湯.jpg"
            />
            <ul class="card-text ps-4 ms-lg-15 pt-lg-15 pt-md-5">
              <li><h5 class="card-title fs-md-5 m-0">豬肉蔥捲</h5></li>
              <li>15分鐘</li>
              <li>食材：火鍋五花肉片</li>
              <li>醬料：烤肉醬</li>
            </ul>
          </div>
          <button class="float-end btn d-md-none">
            <i class="fa-solid fa-utensils fs-5 text-primary"></i>
          </button>
          <button
            href="#"
            class="
              d-none d-md-block
              btn btn-primary
              w-lg-75 w-100
              text-own-white
              rounded-pill
              py-3
              px-5
            "
          >
            <i class="fa-solid fa-utensils align-top fs-5 me-3"></i>加入餐點
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
        <div
          class="
            group-card-area
            card-body
            d-flex
            text-start text-md-start
            align-items-center
            justify-content-between
            flex-md-column
            position-relative
          "
        >
          <div
            class="
              d-flex
              flex-md-column
              align-items-md-start
              ps-md-4
              py-md-4
              align-items-center
              justify-content-start
              index-card-img
            "
          >
            <img
              class="
                img-fluid
                rounded-3
                w-30 w-md-75
                h-25
                border-0
                me-lg-8
                ms-lg-5
                mt-md-3
                m-md-auto
              "
              src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E7%8E%89%E7%B1%B3%E7%AD%8D.jpg?raw=true"
              alt="蛤蠣湯.jpg"
            />
            <ul class="card-text ps-4 ms-lg-15 pt-lg-15 pt-md-5">
              <li><h5 class="card-title fs-md-5 m-0">玉米筍</h5></li>
              <li>10分鐘</li>
              <li>食材：玉米筍、蒜頭</li>
              <li>醬料：鹽</li>
            </ul>
          </div>
          <button class="float-end btn d-md-none">
            <i class="fa-solid fa-utensils fs-5 text-primary"></i>
          </button>
          <button
            href="#"
            class="
              d-none d-md-block
              btn btn-primary
              w-lg-75 w-100
              text-own-white
              rounded-pill
              py-3
              px-5
            "
          >
            <i class="fa-solid fa-utensils align-top fs-5 me-3"></i>加入餐點
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card bg-bright-green pb-md-5 border-0 text-dark-green">
        <div
          class="
            group-card-area
            card-body
            d-flex
            text-start text-md-start
            align-items-center
            justify-content-between
            flex-md-column
            position-relative
          "
        >
          <div
            class="
              d-flex
              flex-md-column
              align-items-md-start
              ps-md-4
              py-md-4
              align-items-center
              justify-content-start
              index-card-img-bright
            "
          >
            <img
              class="
                img-fluid
                rounded-3
                w-30 w-md-75
                h-25
                border border-card-green-100 border-2
                me-lg-8
                ms-lg-5
                mt-md-3
                m-md-auto
              "
              src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E6%B8%85%E8%92%B8%E7%B5%B2%E7%93%9C.jpg?raw=true"
              alt="清蒸絲瓜.jpg"
            />
            <ul class="card-text ps-4 ms-lg-15 pt-lg-15 pt-md-5">
              <li><h5 class="card-title fs-md-5 m-0">清蒸絲瓜</h5></li>
              <li>20分鐘</li>
              <li>食材：絲瓜、薑</li>
              <li>醬料：鹽</li>
            </ul>
          </div>
          <button class="float-end btn d-md-none">
            <i class="fa-solid fa-utensils fs-5 text-primary"></i>
          </button>
          <button
            href="#"
            class="
              d-none d-md-block
              btn btn-primary
              w-lg-75 w-100
              text-own-white
              rounded-pill
              py-3
              px-5
            "
          >
            <i class="fa-solid fa-utensils align-top fs-5 me-3"></i>加入餐點
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
        <div
          class="
            group-card-area
            card-body
            d-flex
            text-start text-md-start
            align-items-center
            justify-content-between
            flex-md-column
            position-relative
          "
        >
          <div
            class="
              d-flex
              flex-md-column
              align-items-md-start
              ps-md-4
              py-md-4
              align-items-center
              justify-content-start
              index-card-img
            "
          >
            <img
              class="
                img-fluid
                rounded-3
                w-30 w-md-75
                h-25
                border-0
                me-lg-8
                ms-lg-5
                mt-md-3
                m-md-auto
              "
              src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E9%AE%AD%E9%AD%9A.jpg?raw=true"
              alt="蛤蠣湯.jpg"
            />
            <ul class="card-text ps-4 p-0 ms-lg-15 pt-md-15">
              <li><h5 class="card-title fs-md-5 m-0">香煎鮭魚</h5></li>
              <li>35分鐘</li>
              <li>食材：鮭魚、蒜頭</li>
              <li>醬料：鹽、迷迭香或黑胡椒</li>
            </ul>
          </div>
          <button class="float-end btn d-md-none">
            <i class="fa-solid fa-utensils fs-5 text-primary"></i>
          </button>
          <button
            href="#"
            class="
              d-none d-md-block
              btn btn-primary
              w-lg-75 w-100
              text-own-white
              rounded-pill
              py-3
              px-5
            "
          >
            <i class="fa-solid fa-utensils align-top fs-5 me-3"></i>加入餐點
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination, Navigation]
    }
  }
}
</script>
