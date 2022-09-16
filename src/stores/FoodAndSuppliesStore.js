import axios from 'axios'
import { defineStore } from 'pinia'
export default defineStore('foodAndSuppliesStore', {
  state: () => ({
    FASdata: [],
    FASfilter: [],
    isLoading: true
  }),
  actions: {
    getFAS () {
      axios.get(`${process.env.VUE_APP_API}commonStuff`)
        .then(res => {
          this.FASdata = res.data
          console.log(this.FASdata)
          setTimeout(this.isLoading = false, 2000)
        })
    },
    runFilter (tag) {
      this.FASfilter = this.FASdata.filter(item => item.tag === tag)
    }
  }
})
