<template src="./List.html"></template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    unreads: {
      type: Array,
      default() {
        return []
      },
    },
    servers: {
      type: Array,
      default() {
        return []
      },
    },
  },
})
</script>

<style scoped lang="less" src="./List.less"></style>
