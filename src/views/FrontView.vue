<template>
<navbar></navbar>
<router-view/>
</template>

<script>
import navbar from '@/components/FrontNavbar.vue'
export default {
  components: {
    navbar
  }
}
</script>
