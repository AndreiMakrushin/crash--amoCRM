<script setup>
import { defineProps, ref} from 'vue';
import Dropdown from "primevue/dropdown";

const optionValue = ref();
const props = defineProps({
  option: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
});

</script>
<template>
  <div>
    <div>
      <div class="p-float-label">
        <Dropdown
          v-model="optionValue"
          @change="$emit('update:modelValue', $event.value)"
          inputId="dd-city"
          :options="props.option"
          optionLabel="label"
          optionValue="value"
          :placeholder="placeholder"
          class="w-full md:w-14rem"
        />
        <label for="dd-city">{{ placeholder }}</label>
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(.p-dropdown-label) {
  width: 300px;
}
:deep(.p-dropdown) {
  margin: 20px;
}
:deep(label){
  margin-left: 20px;
  margin-top: -5px;
}
</style>

