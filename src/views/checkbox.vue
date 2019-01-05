<template>
  <div>
    <i-checkbox :true-value="0" :false-value="1" v-model="single">
      单独选项
    </i-checkbox>
    <i-checkbox-group v-model="multiple">
      <i-checkbox label="option1">选项 1</i-checkbox>
      <i-checkbox label="option2">选项 2</i-checkbox>
      <i-checkbox label="option3">选项 3</i-checkbox>
      <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>
  </div>
</template>

<script>
  import iCheckbox from '../components/checkbox/checkbox.vue';
  import iCheckboxGroup from '../components/checkbox/checkbox-group.vue';
  export default {
    components: {
      iCheckbox,
      iCheckboxGroup
    },
    data() {
      return {
        single: 0,
        multiple: ['option1', 'option3']
      }
    }
  }
</script>

<style scoped>

</style>