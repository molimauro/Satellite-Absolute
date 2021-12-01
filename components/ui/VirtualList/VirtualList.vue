<template>
  <DynamicScroller :items="items" :min-item-size="100" class="scroller">
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[]"
        :data-index="index"
      >
        <div v-if="item.type === 'group'">
          <TailoredMessagingGroup :key="item.id" :group="item" />
        </div>
        <div v-if="item.type === 'caret_divider'">
          <UiCaretDivider text="New Messages" />
        </div>
        <div v-else-if="item.type === 'divider'">
          <UiHorizontalRuleText :value="item.at.toString()" />
        </div>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  components: {
    DynamicScroller,
    DynamicScrollerItem,
  },
  props: {
    items: Array,
  },
}
</script>

<style scoped>
.scroller {
  height: 100%;
  /* width: 100%;
  display: flex;
  flex-direction: column-reverse; */
}
.avatar {
  flex: auto 0 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
}
.avatar .image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}
.index,
.text {
  flex: 1;
}
.text {
  max-width: 400px;
}
</style>
