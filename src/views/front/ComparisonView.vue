<template>
  <div class="comparison-bg-big">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="text-dark-green mt-15">需購買的食材清單</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="d-flex justify-content-md-between my-5">
            <router-link to="/myOrder" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-outline-own-orange tl-bl-radius radius-md-all  py-3 px-5 px-md-7 me-md-4 fs-md-5"><i class="me-2 align-middle h3
                  fa-solid fa-circle-arrow-left"></i>返回餐點</router-link>
            <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-own-orange tr-br-radius radius-md-all text-own-white py-3 px-5 fs-md-5"><i class="me-2 align-middle h3 fa-solid fa-pen-to-square"></i>編輯冰箱</button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="comparison p-4 border-2 border border-own-white rounded-2">
            <table class=" table table-striped table-borderless">
              <thead class="fs-md-5 color-own-brown-lighten-35">
                  <tr class="">
                    <th scope="col" class="">食材名稱</th>
                    <th scope="col" class="">數量</th>
                    <th scope="col" class="">食譜來源</th>
                  </tr>
              </thead>
              <tbody class="text-own-brown">
                  <tr class="">
                    <td class="py-4 rounded-start rounded-1 align-middle fs-lg-6">五花豬肉片</td>
                    <td class="py-4 text-own-orange align-middle fs-lg-6">
                    1 盒</td>
                    <td class="py-4 rounded-end rounded-1 align-middle fs-lg-6">豬肉蔥卷
                    </td>
                  </tr>
                  <tr class="">
                    <td class="py-4 rounded-start rounded-1 align-middle fs-lg-6">五花豬肉片</td>
                    <td class="py-4 text-own-orange align-middle fs-lg-6">
                    1 盒</td>
                    <td class="py-4 rounded-end rounded-1 align-middle fs-lg-6">豬肉蔥卷
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row mt-15">
        <h2 class="text-own-brown h1">計算過程</h2>
      </div>
    </div>
  </div>
  <div class="myOrder-equipment-bg py-6">
    <div class="container">
      <div class="row">
        <div class="spacing">
          <table class=" table table-borderless">
            <thead class="fs-md-6 color-own-brown-lighten-35">
                <tr class="">
                  <th scope="col" class="">食材名稱</th>
                  <th scope="col" class="">所需數量</th>
                  <th scope="col" class="">本日餐點</th>
                  <th scope="col" class="">結果</th>
                </tr>
            </thead>
            <tbody class="text-own-brown bg-own-skin">
                <tr class="mb-5">
                  <td class="py-4 rounded-start rounded-1 align-middle fs-lg-6">五花肉片</td>
                  <td class="py-4 align-middle fs-lg-6">
                    1盒
                  </td>
                  <td class="py-4 align-middle fs-lg-6">
                    豬肉蔥卷
                  </td>
                  <td class="py-4 align-middle rounded-end rounded-1 fs-lg-6 text-own-orange">
                    少1盒
                  </td>
                </tr>
                <tr class="mb-5">
                  <td class="py-4 rounded-start rounded-1 align-middle fs-lg-6">蔥</td>
                  <td class="py-4 align-middle fs-lg-6">
                    1根
                  </td>
                  <td class="py-4 align-middle fs-lg-6">
                    豬肉蔥卷
                  </td>
                  <td class="py-4 align-middle rounded-end rounded-1 fs-lg-6 text-own-orange">
                    冰箱多3根
                  </td>
                </tr>
                <tr class="mb-5">
                  <td class="py-4 rounded-start rounded-1 align-middle fs-lg-6">百香果</td>
                  <td class="py-4 align-middle fs-lg-6">
                    -
                  </td>
                  <td class="py-4 align-middle fs-lg-6">
                    本日餐點沒有這項食材
                  </td>
                  <td class="py-4 align-middle rounded-end rounded-1 fs-lg-6 text-own-orange">
                    多餘的食材
                  </td>
                </tr>
                <tr class="mb-5">
                  <td class="py-4 rounded-start rounded-1 align-middle fs-lg-6">玉米</td>
                  <td class="py-4 align-middle fs-lg-6">
                    1根
                  </td>
                  <td class="py-4 align-middle fs-lg-6">
                    玉米排骨湯
                  </td>
                  <td class="py-4 align-middle rounded-end rounded-1 fs-lg-6">
                    數量剛好
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
