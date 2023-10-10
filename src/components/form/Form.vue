<script setup>
import Drop from '../form-components/Dropdown.vue'
import Button from '../form-components/Button.vue'

import { useCounterStore } from '@/stores/store'
const store = useCounterStore()

</script>
<template>
  <div>
    <div class="block-form">
      <div class="form">
      <Drop v-model="store.optionValue" :option="store.options" class="m-2" :placeholder="'Не Выбрано'" size="large"/>
      <Button
      @click.prevent="store.send(store.optionValue), store.preloader = true"
        class="m-2"
        :buttonText="'Создать'"
        :preloader="store.preloader"
        :value="store.optionValue"
        type="primary"
        plain
      ></Button>
    </div>
    </div>
  </div>
</template>
<style scoped>
.block-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
