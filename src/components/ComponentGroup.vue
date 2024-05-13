<template>
  <div class="widget-cate">{{ title }}</div>
  <Draggable
    tag="ul"
    item-key="type"
    ghostClass="ghost"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :clone="cloneWidget"
    :sort="false"
    :list="list"
  >
    <template #item="{ element }">
      <li
        v-if="fields.includes(element.type)"
        class="form-edit-widget-label"
        :class="{ 'no-put': element.tpye === 'divider' }"
      >
        <a>
          <SvgIcon :iconClass="element.type" />
          <span>{{ element.label }}</span>
        </a>
      </li>
    </template>
  </Draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Draggable from 'vuedraggable'
import SvgIcon from './SvgIcon.vue'
import { cloneDeep } from 'lodash'

export default defineComponent({
  name: 'ComponentGroup',
  components: {
    Draggable,
    SvgIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    fields: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    list: {
      required: true
    }
  },
  setup() {
    function cloneWidget(params: any) {
      const key = Math.random().toString(36).substring(2, 9)
      params = cloneDeep({
        ...params,
        key
      })
      if (params.type === 'grid') {
        params.columns.forEach((i: any) => {
          i.list = i.list.map(cloneWidget)
        })
      }
      return params
    }

    return {
      cloneWidget
    }
  }
})
</script>
