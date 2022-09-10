<template>
  <div class="container">
    <h1 class="text-dark-green mt-15">我的餐車</h1>
  </div>
  <div class="container mt-15">
    <div class="row justify-content-md-between flex-md-row-reverse">
      <div class="col-lg-9 col-md-8">
        <div class="d-flex d-lg-inline my-5 float-md-end">
          <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-outline-primary tl-bl-radius radius-md-all  py-3 py-md-5 px-5 px-md-7 me-md-4 fs-5"><i class="me-2 align-middle h3
                fa-solid fa-circle-xmark"></i>清除所有餐點</button>
          <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-primary tr-br-radius radius-md-all text-own-white py-3 py-md-5 px-5 fs-5"><i class="me-2 align-middle h3 fa-solid fa-book-open"></i>逛逛食譜</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <select class="form-select py-3 py-md-5 mb-6 mb-md-0 my-md-5 px-5 px-md-7 rounded-pill shadow  border-0
                fs-5" aria-label="Default select example">
          <option selected class="">1 / 人</option>
          <option value="2">2 / 人</option>
          <option value="3">3 / 人</option>
          <option value="4">4 / 人</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="myOrder-order">
        <table class="w-100 my-5 table table-striped ">
          <thead class="fs-md-5 text-card-green-300">
            <tr>
              <th scope="col"></th>
              <th scope="col" class="d-none d-lg-table-cell" width="180"></th>
              <th scope="col">餐點</th>
              <th scope="col">食材</th>
              <th scope="col">放置時間</th>
              <th scope="col">花費時間</th>
            </tr>
          </thead>
          <tbody class="text-dark-green bg-bright-green">
            <tr class="">
              <th scope="row" class="py-4  border-0 rounded-start align-middle">
                <i class="text-card-green-300 h3
                fa-solid fa-circle-xmark m-0"></i>
              </th>
              <td class="py-4 d-none d-lg-table-cell "><img width="180" class="img-fluid rounded-2 border border-card-green-300 border-2 rounded-2"
              src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E7%8E%89%E7%B1%B3%E7%AD%8D.jpg?raw=true" alt="" ></td>
              <td class="py-4 border-0 align-middle fs-lg-6">百香果汁</td>
              <td class="py-4 border-0 align-middle fs-lg-6">百香果</td>
              <td class="py-4 border-0 align-middle fs-lg-6"></td>
              <td class="py-4 border-0 align-middle rounded-end fs-lg-6">5 分</td>
            </tr>
            <tr>
              <th scope="row" class="py-4 rounded-start border-0 align-middle">
                <i class="text-card-green-300 h3
                fa-solid fa-circle-xmark m-0"></i>
              </th>
              <td class="py-4 d-none d-lg-table-cell border-0 align-middle"><img width="180" class="img-fluid rounded-2 border border-2 border-card-green-300"
              src="https://github.com/eee317/EasyCook/blob/main/src/libs/img/recipe/%E7%8E%89%E7%B1%B3%E7%AD%8D.jpg?raw=true" alt="" ></td>
              <td class="py-4 border-0 align-middle fs-lg-6">百香果汁</td>
              <td class="py-4 border-0 align-middle fs-lg-6">百香果</td>
              <td class="py-4 border-0 align-middle fs-lg-6"></td>
              <td class="py-4 border-0 align-middle rounded-end fs-lg-6">5 分</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-dark-green">
              <td class="border-0 pt-6"></td>
              <td class="border-0 d-none d-lg-table-cell pt-8"></td>
              <td class="border-0 pt-6"></td>
              <td class="border-0 pt-6"></td>
              <td class="border-0 pt-6 fs-lg-6">烹飪時間 / 分</td>
              <td class="border-0 pt-6 fs-lg-6">20 分</td>
            </tr>
            <tr class="text-dark-green">
              <td class="border-0"></td>
              <td class="border-0 d-none d-lg-table-cell"></td>
              <td class="border-0"></td>
              <td class="border-0"></td>
              <td class="border-bottom border-3 border-card-img-green-200 fs-lg-6">放置時間 / 分</td>
              <td class="border-bottom border-3 border-card-img-green-200 fs-lg-6">-10 分</td>
            </tr>
            <tr class="text-dark-green fw-bold">
              <td class="border-0"></td>
              <td class="border-0 d-none d-lg-table-cell"></td>
              <td class="border-0"></td>
              <td class="border-0"></td>
              <th class="py-4 border-0 fs-lg-6">放置時間 / 分</th>
              <td class="py-4 border-0 fs-lg-6">10 分</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
