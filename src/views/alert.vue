<template>
  <div>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>  
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen1 () {
        this.$Alert.info({
          content: '提示1'
        })
      },
      handleOpen2 () {
        this.$Alert.info({
          content: '提示2',
          duration: 3
        })
      }
    }
  }
</script>

<style scoped>

</style>