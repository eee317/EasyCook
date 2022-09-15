<template>
<navbar></navbar>
<div class="main">
  <router-view/>
</div>
<footerview></footerview>
</template>

<script>
import navbar from '@/components/FrontNavbar.vue'
import footerview from '@/components/FrontFooter.vue'
export default {
  components: {
    navbar,
    footerview
  },
  methods: {
    bottomFooter () {
      const navbarHeight = document.querySelector('nav').offsetHeight
      const footerHeight = document.querySelector('footer').offsetHeight
      const mainDom = document.querySelector('.main')
      mainDom.style.minHeight = `calc(100vh - (${navbarHeight}px + ${footerHeight}px))`
    }
  },
  mounted () {
    this.bottomFooter()
  }
}
</script>
