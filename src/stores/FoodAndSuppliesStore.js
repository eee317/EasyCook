import axios from 'axios'
import { defineStore } from 'pinia'
export default defineStore('foodAndSuppliesStore', {
  state: () => ({
    FASdata: []
  }),
  actions: {
    getFAS () {
      axios.get(`${process.env.VUE_APP_API}commonStuff`)
        .then(res => {
          this.FASdata = res.data
          console.log(this.FASdata)
        })
    }
  }
})
