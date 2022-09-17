<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content bg-bright-green border-0 p-5">
        <div class="modal-header px-0 pt-0">
          <h5 class="modal-title text-own-brown p-0 m-0">我的冰箱</h5>
          <button type="button" class="btn btn-primary rounded-pill text-own-white"><i class="me-3 fa-solid fa-circle-plus align-middle"></i>新增</button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-between align-items-center py-3 px-md-5 text-own-brown">
              <h6 class="color-own-brown-lighten ms-4 fs-lg-6">食材名稱</h6>
              <h6 class="color-own-brown-lighten me-4 fs-lg-6">數量</h6>
            </div>
            <div class="text-own-brown px-md-5 d-flex mb-3">
              <input class="px-4 py-3 form-control tl-bl-radius border-0 border-top border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="text" placeholder="請輸入文字" aria-label="default input example" value="蔥">
              <input class="pe-5 py-3 form-control tr-br-radius tl-bl-radius text-end border-0 border-top border-end border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="number" placeholder="請輸入數字" aria-label="default input example" value="3">
            </div>
            <div class="text-own-brown px-md-5 d-flex mb-3">
              <input class="px-4 py-3 form-control tl-bl-radius border-0 border-top border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="text" placeholder="請輸入文字" aria-label="default input example" value="玉米">
              <input class="pe-5 py-3 form-control tr-br-radius tl-bl-radius text-end border-0 border-top border-end border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="number" placeholder="請輸入數字" aria-label="default input example" value="1">
            </div>
            <div class="text-own-brown px-md-5 d-flex mb-3">
              <input class="px-4 py-3 form-control tl-bl-radius border-0 border-top border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="text" placeholder="請輸入文字" aria-label="default input example" value="百香果">
              <input class="pe-5 py-3 form-control tr-br-radius tl-bl-radius text-end border-0 border-top border-end border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="number" placeholder="請輸入數字" aria-label="default input example" value="1">
            </div>
        </div>
        <div class="modal-footer px-0 pb-0 d-flex justify-content-between">
          <button type="button" class="btn btn-outline-primary rounded-pill" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-own-orange rounded-pill text-own-white">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModel () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal, { keyboard: false })
  }
}
</script>
