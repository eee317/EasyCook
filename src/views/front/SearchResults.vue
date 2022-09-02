<template>
  <div class="container">
    <div class="row mt-10 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div>
          <input
            type="search"
            class="
              form-control
              shadow
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
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <select class="form-select  py-3 py-md-5 mb-6
              px-5 px-md-7 rounded-pill shadow  border-0
              fs-5" aria-label="Default select example">
          <option selected class="">選擇食材</option>
          <option value="1">雞蛋</option>
          <option value="2">雞肉</option>
          <option value="3">絲瓜</option>
        </select>
        <!-- <div class="">
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
          </div> -->
      </div>
      <div class="col-lg-8">
        <div class="d-flex">
          <select class="form-select  py-3 py-md-5
                px-5 px-md-7 shadow  border-0
                fs-5" aria-label="Default select example">
            <option selected class="">不限時</option>
            <option value="1">限時5分鐘</option>
            <option value="1">限時10分鐘</option>
            <option value="1">限時20分鐘</option>
            <option value="1">限時30分鐘</option>
          </select>
          <select class="form-select  py-3 py-md-5
                px-5 px-md-7 shadow  border-0
                fs-5" aria-label="Default select example">
            <option selected class="">葷素皆宜</option>
            <option value="1">蛋奶素</option>
            <option value="1">葷</option>
          </select>
        </div>
        <div class="d-flex">
          <select class="form-select  py-3 py-md-5
                px-5 px-md-7 shadow  border-0
                fs-5" aria-label="Default select example">
            <option selected class="">設備</option>
            <option value="1">平底鍋</option>
            <option value="1">電鍋</option>
            <option value="1">鐵鍋</option>
          </select>
          <select class="form-select  py-3 py-md-5
                px-5 px-md-7 shadow  border-0
                fs-5" aria-label="Default select example">
            <option selected class="">放置類型</option>
            <option value="1">非放置類型</option>
            <option value="1">可放置類型</option>
          </select>
        </div>
      </div>
      <div class="col-md-12">
        <input
            type="button"
            value="搜尋"
            class="mt-6 fs-5 px-7 btn btn-primary rounded-pill text-own-white"
          />
      </div>
    </div>
  </div>
</template>
