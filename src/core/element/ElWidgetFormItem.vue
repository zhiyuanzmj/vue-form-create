<template>
  <div class="widget-item-container">
    <el-table
      border
      v-if="element.type === 'table'"
      class="widget-view"
      :data="element.options.defaultValue"
      :class="{ active: selectWidget?.key === element.key }"
    >
      <el-table-column
        v-for="i in element.columns"
        :key="i.prop"
        :header-align="element.options.align"
        :align="element.options.align"
        v-bind="i"
      ></el-table-column>
    </el-table>
    <div
      v-else-if="element.type === 'divider'"
      class="widget-view"
      style="padding-bottom: 0"
      :class="{ active: selectWidget?.key === element.key }"
    >
      <el-divider :data="element.options.defaultValue" content-position="left">
        {{ element.label }}
      </el-divider>
    </div>

    <el-form-item
      class="widget-view"
      v-else-if="element"
      :key="element.key"
      :class="{ active: selectWidget?.key === element.key }"
      :label="element.label"
      :label-width="element.labelWidth"
      :rules="element.options?.rules"
    >
      <template v-if="element.type === 'input'">
        <el-input
          readonly
          :modelValue="element.options.defaultValue"
          :style="{ width: element.options.width }"
          :placeholder="element.options.placeholder"
          :maxlength="parseInt(element.options.maxlength)"
          :clearable="element.options.clearable"
          :disabled="element.options.disabled"
        >
          <template #prefix v-if="element.options.prefix">
            {{ element.options.prefix }}
          </template>
          <template #suffix v-if="element.options.suffix">
            {{ element.options.suffix }}
          </template>
          <template #prepend v-if="element.options.prepend">
            {{ element.options.prepend }}
          </template>
          <template #append v-if="element.options.append">
            {{ element.options.append }}
          </template>
        </el-input>
      </template>

      <template v-if="element.type === 'password'">
        <el-input
          readonly
          :modelValue="element.options.defaultValue"
          :style="{ width: element.options.width }"
          :placeholder="element.options.placeholder"
          :maxlength="parseInt(element.options.maxlength)"
          :clearable="element.options.clearable"
          :disabled="element.options.disabled"
          :show-password="element.options.showPassword"
        >
          <template #prefix v-if="element.options.prefix">
            {{ element.options.prefix }}
          </template>
          <template #suffix v-if="element.options.suffix">
            {{ element.options.suffix }}
          </template>
          <template #prepend v-if="element.options.prepend">
            {{ element.options.prepend }}
          </template>
          <template #append v-if="element.options.append">
            {{ element.options.append }}
          </template>
        </el-input>
      </template>

      <template v-if="element.type === 'textarea'">
        <el-input
          type="textarea"
          resize="none"
          readonly
          :rows="element.options.rows"
          :modelValue="element.options.defaultValue"
          :style="{ width: element.options.width }"
          :placeholder="element.options.placeholder"
          :maxlength="parseInt(element.options.maxlength)"
          :show-word-limit="element.options.showWordLimit"
          :autosize="element.options.autosize"
          :clearable="element.options.clearable"
          :disabled="element.options.disabled"
        />
      </template>

      <template v-if="element.type === 'number'">
        <el-input-number
          :modelValue="element.options.defaultValue"
          :style="{ width: element.options.width }"
          :max="element.options.max"
          :min="element.options.min"
          :disabled="element.options.disabled"
        />
      </template>

      <template v-if="element.type === 'radio'">
        <el-radio-group
          :modelValue="element.options.defaultValue"
          :style="{ width: element.options.width }"
          :disabled="element.options.disabled"
        >
          <el-radio
            v-for="item of element.options.options"
            :key="item.value"
            :label="item.value"
            :style="{
              display: element.options.inline ? 'inline-block' : 'block'
            }"
            >{{ element.options.showLabel ? item.label : item.value }}</el-radio
          >
        </el-radio-group>
      </template>

      <template v-if="element.type === 'checkbox'">
        <el-checkbox-group
          :modelValue="element.options.defaultValue"
          :style="{ width: element.options.width }"
          :disabled="element.options.disabled"
        >
          <el-checkbox
            v-for="item of element.options.options"
            :key="item.value"
            :label="item.value"
            :style="{
              display: element.options.inline ? 'inline-block' : 'block'
            }"
            >{{ element.options.showLabel ? item.label : item.value }}
          </el-checkbox>
        </el-checkbox-group>
      </template>

      <template v-if="element.type === 'time'">
        <el-time-picker
          :modelValue="element.options.defaultValue"
          :placeholder="element.options.placeholder"
          :readonly="element.options.readonly"
          :editable="element.options.editable"
          :clearable="element.options.clearable"
          :format="element.options.format"
          :disabled="element.options.disabled"
          :style="{ width: element.options.width }"
        />
      </template>

      <template v-if="element.type === 'date'">
        <el-date-picker
          :modelValue="element.options.defaultValue"
          :placeholder="element.options.placeholder"
          :readonly="element.options.readonly"
          :editable="element.options.editable"
          :clearable="element.options.clearable"
          :format="element.options.format"
          :disabled="element.options.disabled"
          :style="{ width: element.options.width }"
        />
      </template>

      <template v-if="element.type === 'rate'">
        <el-rate
          :modelValue="element.options.defaultValue"
          :max="element.options.max"
          :allowHalf="element.options.allowHalf"
          :disabled="element.options.disabled"
        />
      </template>

      <template v-if="element.type === 'select'">
        <el-select
          :modelValue="element.options.defaultValue"
          :multiple="element.options.multiple"
          :placeholder="element.options.placeholder"
          :clearable="element.options.clearable"
          :filterable="element.options.filterable"
          :disabled="element.options.disabled"
          :style="{ width: element.options.width }"
        >
          <el-option
            v-for="item of element.options.options"
            :key="item.value"
            :value="item.value"
            :label="element.options.showLabel ? item.label : item.value"
          />
        </el-select>
      </template>

      <template v-if="element.type === 'switch'">
        <el-switch
          :modelValue="element.options.defaultValue"
          :active-text="element.options.activeText"
          :inactive-text="element.options.inactiveText"
          :disabled="element.options.disabled"
        />
      </template>

      <template v-if="element.type === 'slider'">
        <el-slider
          :modelValue="element.options.defaultValue"
          :min="element.options.min"
          :max="element.options.max"
          :step="element.options.step"
          :range="element.options.range"
          :disabled="element.options.disabled"
          :style="{ width: element.options.width }"
        />
      </template>

      <template v-if="element.type == 'text'">
        <span>{{ element.options.defaultValue }}</span>
      </template>

      <template v-if="element.type === 'img-upload'">
        <el-upload
          :name="element.options.file"
          :action="element.options.action"
          :accept="element.options.accept"
          :listType="element.options.listType"
          :multiple="element.options.multiple"
          :limit="element.options.limit"
          :disabled="element.options.disabled"
        >
          <template v-if="element.options.listType === 'picture-card'">
            <el-image
              v-if="element.options.defaultValue?.length"
              style="width: 100%; height: 100%"
              :preview-src-list="[
                '/api/sys/common/static/' + element.options.defaultValue
              ]"
              :src="'/api/sys/common/static/' + element.options.defaultValue"
            />
            <SvgIcon v-else iconClass="insert" />
          </template>
          <el-button v-else>
            <SvgIcon iconClass="img-upload" style="margin-right: 10px" />
            点击上传
          </el-button>
        </el-upload>
      </template>

      <template v-if="element.type === 'download'">
        <el-button type="text" size="default" style="margin-top: -4px">
          下载
        </el-button>
      </template>

      <template v-if="element.type === 'richtext-editor'">
        <RichTextEditor
          :value="element.options.defaultValue"
          :disable="element.options.disabled"
          :style="{ width: element.options.width }"
        />
      </template>

      <template v-if="element.type === 'cascader'">
        <el-cascader
          :modelValue="element.options.defaultValue"
          :options="element.options.remoteOptions"
          :placeholder="element.options.placeholder"
          :filterable="element.options.filterable"
          :clearable="element.options.clearable"
          :disabled="element.options.disabled"
          :style="{ width: element.options.width }"
        />
      </template>
    </el-form-item>
    <div class="widget-view-action" v-if="selectWidget?.key === element.key">
      <SvgIcon iconClass="copy" @click.stop="$emit('copy')" />
      <SvgIcon iconClass="delete" @click.stop="$emit('delete')" />
    </div>

    <div class="widget-view-drag" v-if="selectWidget?.key === element.key">
      <SvgIcon iconClass="move" className="drag-widget" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import RichTextEditor from '@/components/RichTextEditor.vue'
import { WidgetForm } from '@/config/element'

export default defineComponent({
  name: 'ElWidgetFormItem',
  components: {
    SvgIcon,
    RichTextEditor
  },
  props: {
    config: {
      type: Object as PropType<WidgetForm['config']>,
      required: true
    },
    element: {
      type: Object,
      required: true
    },
    selectWidget: {
      type: Object
    }
  },
  emits: ['copy', 'delete']
})
</script>
<style scoped>
:deep(.el-upload--picture-card) {
  width: 141.5px;
  height: 141.5px;
}
</style>
