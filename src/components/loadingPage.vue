<template>
  <div class='animated fadeOut'>
    <LoadingTool
      :active="isLoading"
      loader='spinner'
      color='#1E9D88'
      >
    </LoadingTool>
  </div>
</template>
<script>
export default {
  props: {
    isLoading: Boolean
  }
}
</script>
