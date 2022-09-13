<template>
<navbar></navbar>
<router-view/>
<footerview></footerview>
</template>

<script>
import navbar from '@/components/FrontNavbar.vue'
import footerview from '@/components/FrontFooter.vue'
export default {
  components: {
    navbar,
    footerview
  }
}
</script>
