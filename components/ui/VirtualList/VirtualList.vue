<template>
  <virtual-list
    v-show="!!items.length"
    class="stream"
    :data-key="'id'"
    :data-sources="items"
    :data-component="messageComponent"
    :estimate-size="100"
  />
</template>

<script>
import VirtualList from 'vue-virtual-scroll-list'
import TailoredMessagingGroup from '~/components/tailored/messaging/group/Group.vue'

export default {
  components: {
    VirtualList,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      messageComponent: TailoredMessagingGroup,
    }
  },
}
</script>

<style scoped>
.stream {
  height: 100%;
  overflow-y: auto;
  /* width: 100%;
  display: flex;
  flex-direction: column-reverse; */
}
</style>
