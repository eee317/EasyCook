<template>
  <div class="container">
    <img
      class="img-fluid mt-20"
      width="300"
      src="../../libs/img/logo/logo-navbar.svg"
      alt="輕鬆煮廚logo.img"
    />
  </div>
  <div class="container">
    <div class="row mt-10 justify-content-center">
      <div class="col-md-4">
        <div class="d-flex flex-column align-items-center">
          <input
            type="search"
            class="
              form-control
              shadow
              w-75 w-md-100
              mb-6
              py-3 py-md-5
              px-5 px-md-7
              fs-5
              text-primary
              border-0
              rounded-pill
            "
            placeholder="搜尋食譜"
          />
          <div class="w-75 w-md-100">
            <div class="dropdown">
              <button
                class="
                  btn btn-own-white
                  dropdown-toggle
                  shadow
                  text-start text-primary
                  w-100
                  py-3 py-md-5
                  px-5 px-md-7
                  fs-5
                  rounded-pill
                "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                選擇食材
              </button>
              <ul
                class="dropdown-menu border-0 w-75 ms-8 mb-2 fs-5"
                aria-labelledby="dropdownMenuButton1"
              >
                <li><a class="dropdown-item text-primary" href="#">雞蛋</a></li>
                <li><a class="dropdown-item text-primary" href="#">地瓜</a></li>
                <li>
                  <a class="dropdown-item text-primary" href="#">玉米筍</a>
                </li>
              </ul>
            </div>
          </div>
          <input
            type="button"
            value="搜尋"
            class="mt-6 fs-5 px-7 btn btn-primary rounded-pill text-own-white"
          />
        </div>
      </div>
    </div>
  </div>
  <main>
    <section class="index-bg mt-10">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-9 position-relative mt-md-10">
            <div
              class="
                h-660px
                d-md-flex
                align-items-md-center
                justify-content-md-between
              "
            >
              <p
                class="
                  fw-bolder
                  text-letter-3
                  pt-20 pt-md-0
                  h1
                  mb-5
                  index-title-bg
                  fw-bolder
                  fs-md-78px
                  writing-md
                  me-md-5
                  m-md-0
                  px-md-3
                  rotate-md
                "
              >
                夏日推薦
              </p>
              <ul class="w-100 m-0 p-3 bg-box">
                <li class="mb-5 d-md-flex">
                  <div
                    class="
                      card
                      w-md-75
                      rounded-2
                      px-3
                      border-own-yellow
                      bg-own-skin
                    "
                  >
                    <div class="d-flex align-items-center py-lg-2">
                      <img
                        class="
                          img-fluid
                          w-25 w-lg-18
                          rounded-2
                          border border-own-yellow
                        "
                        src="../../libs/img/recipe/百香果汁.jpg"
                        alt="百香果汁.jpg"
                      />
                      <div class="card-body text-start text-own-brown">
                        <h6 class="card-title">百香果汁</h6>
                        <p class="card-text m-0">5分鐘</p>
                        <p class="card-text m-0">食材：百香果、水</p>
                        <p class="card-text m-0">醬料：蜂蜜</p>
                      </div>
                      <button class="btn text-primary d-md-none">
                        <i class="fa-solid fa-utensils fs-5"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    class="
                      btn btn-primary
                      ms-5
                      text-own-white
                      w-25
                      d-md-block d-none
                    "
                  >
                    <i class="fa-solid fa-utensils fs-5 me-2"></i>
                    加入餐點
                  </button>
                </li>
                <li class="mb-5 d-md-flex">
                  <div
                    class="
                      card
                      w-md-75
                      rounded-2
                      px-3
                      border-own-yellow
                      bg-own-skin
                    "
                  >
                    <div class="d-flex align-items-center py-lg-2">
                      <img
                        class="
                          img-fluid
                          w-25 w-lg-18
                          rounded-2
                          border border-own-yellow
                        "
                        src="../../libs/img/recipe/西西里檸檬氣泡飲.jpg"
                        alt="百香果汁.jpg"
                      />
                      <div class="card-body text-start text-own-brown">
                        <h6 class="card-title">西西里檸檬氣泡飲</h6>
                        <p class="card-text m-0">5分鐘</p>
                        <p class="card-text m-0">食材：雪碧、咖啡、檸檬</p>
                      </div>
                      <button class="btn text-primary d-md-none w-md-15">
                        <i class="fa-solid fa-utensils fs-5"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    class="
                      btn btn-primary
                      ms-5
                      text-own-white
                      w-25
                      d-md-block d-none
                    "
                  >
                    <i class="fa-solid fa-utensils fs-5 me-2"></i>
                    加入餐點
                  </button>
                </li>
                <li class="mb-5 d-md-flex">
                  <div
                    class="
                      card
                      w-md-75
                      rounded-2
                      px-3
                      border-own-yellow
                      bg-own-skin
                    "
                  >
                    <div class="d-flex align-items-center py-lg-2">
                      <img
                        class="
                          img-fluid
                          w-25 w-lg-18
                          rounded-2
                          border border-own-yellow
                        "
                        src="../../libs/img/recipe/玉米沙拉.jpg"
                        alt="百香果汁.jpg"
                      />
                      <div class="card-body text-start text-own-brown">
                        <h6 class="card-title">玉米沙拉</h6>
                        <p class="card-text m-0">5分鐘</p>
                        <p class="card-text m-0">食材：玉米、沙拉醬</p>
                      </div>
                      <button class="btn text-primary d-md-none">
                        <i class="fa-solid fa-utensils fs-5"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    class="
                      btn btn-primary
                      ms-5
                      text-own-white
                      w-25
                      d-md-block d-none
                    "
                  >
                    <i class="fa-solid fa-utensils fs-5 me-2"></i>
                    加入餐點
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="m-0 fs-md-54px fw-bold text-center text-primary fs-1 py-10">
        <span class="text-own-orange">佳餚</span>組合
      </h2>
      <div class="container">
        <div class="position-relative">
          <h3
            class="
              fw-bold
              rounded-pill
              text-start
              group-title
              text-primary
              position-relative
              py-5
              ps-8 ps-md-15
            "
          >
            <span class="text-own-orange">家常菜</span>推薦組合
          </h3>
          <button
            class="
              btn btn-primary
              text-own-white
              py-3
              py-md-4
              px-md-10 px-7
              rounded-pill
              position-absolute
              bottom-r60
              end-5 end-md-15
              w-md-25
              fs-5
            "
          >
            <i class="fa-solid fa-utensils fs-5 me-2"></i>
            組合加入餐點
          </button>
        </div>
      </div>
      <div class="container mt-20">
        <div class="row">
          <div class="col-md-4">
            <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border-0
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/蛤蠣湯.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text ps-4 ms-md-15 pt-md-15 fs-6">
                    <li><h5 class="card-title fs-md-5 m-0">蛤蠣湯</h5></li>
                    <li>15分鐘</li>
                    <li>食材：蛤蠣、薑片</li>
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-bright-green pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border border-card-green-100
                      border-2
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/豬肉蔥卷.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text p-0 ps-4  ms-md-15 pt-md-15 fs-6">
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border-0
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/燙青菜.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text ps-4 p-0 ms-md-15 pt-md-15 fs-6">
                    <li><h5 class="card-title fs-md-5 m-0">燙青菜</h5></li>
                    <li>10分鐘</li>
                    <li>食材：葉菜類蔬菜、蒜頭</li>
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-md-20 mt-10">
      <div class="container">
        <div class="position-relative">
          <h3
            class="
              fw-bold
              rounded-pill
              text-start
              group-title
              text-primary
              position-relative
              py-5
              ps-8 ps-md-15
            "
          >
            <span class="text-own-orange">效率</span>推薦組合
          </h3>
          <button
            class="
              btn btn-primary
              text-own-white
              py-3
              py-md-4
              px-md-10 px-7
              rounded-pill
              position-absolute
              bottom-r60
              end-5 end-md-15
              w-md-25
              fs-5
            "
          >
            <i class="fa-solid fa-utensils fs-5 me-2"></i>
            組合加入餐點
          </button>
        </div>
      </div>
      <div class="container mt-20">
        <div class="row">
          <div class="col-md-4">
            <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border-0
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/涼拌豆腐.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text ps-4 ms-md-15 pt-md-15 fs-6">
                    <li><h5 class="card-title fs-md-5 m-0">涼拌豆腐</h5></li>
                    <li>5分鐘</li>
                    <li>食材：中華豆腐、蔥</li>
                    <li>醬料：醬油膏</li>
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-bright-green pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border border-card-green-100
                      border-2
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/水煮蛋.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text p-0 ps-4  ms-md-15 pt-md-15 fs-6">
                    <li><h5 class="card-title fs-md-5 m-0">水煮蛋</h5></li>
                    <li>5分鐘</li>
                    <li>食材：雞蛋</li>
                    <li>醬料：無</li>
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border-0
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/玉米筍.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text ps-4 p-0 ms-md-15 pt-md-15 fs-6">
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-md-20 mt-10 mb-10 mb-md-20">
      <div class="container">
        <div class="position-relative">
          <h3
            class="
              fw-bold
              rounded-pill
              text-start
              group-title
              text-primary
              position-relative
              py-5
              ps-8 ps-md-15
            "
          >
            <span class="text-own-orange">簡單健康</span>推薦組合
          </h3>
          <button
            class="
              btn btn-primary
              text-own-white
              py-3
              py-md-4
              px-md-10 px-7
              rounded-pill
              position-absolute
              bottom-r60
              end-5 end-md-15
              w-md-25
              fs-5
            "
          >
            <i class="fa-solid fa-utensils fs-5 me-2"></i>
            組合加入餐點
          </button>
        </div>
      </div>
      <div class="container mt-20">
        <div class="row">
          <div class="col-md-4">
            <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border-0
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/蛤蠣湯.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text ps-4 ms-md-15 pt-md-15 fs-6">
                    <li><h5 class="card-title fs-md-5 m-0">地瓜飯</h5></li>
                    <li>20分鐘</li>
                    <li>食材：地瓜、米、水</li>
                    <li>醬料：油</li>
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-bright-green pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border border-card-green-100
                      border-2
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/清蒸絲瓜.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text p-0 ps-4  ms-md-15 pt-md-15 fs-6">
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-card-green-100 pb-md-5 border-0 text-dark-green">
              <div
                class="
                  group-card-area
                  card-body
                  d-flex
                  text-start
                  text-md-start
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
                    ps-md-4 py-md-4
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
                      me-md-8
                      h-25
                      border-0
                      ms-md-5
                      mt-md-3
                    "
                    src="../../libs/img/recipe/鮭魚.jpg"
                    alt="蛤蠣湯.jpg"
                  />
                  <ul class="card-text ps-4 p-0 ms-md-15 pt-md-15 fs-6">
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
                    w-75
                    text-own-white
                    rounded-pill
                    py-3
                    px-5
                  "
                >
                  <i class="fa-solid fa-utensils align-top fs-5 me-3"></i
                  >加入餐點
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
</style>
