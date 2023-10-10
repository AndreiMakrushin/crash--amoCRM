<script setup>
import { ElButton } from 'element-plus'
import { ref } from 'vue'
const props = defineProps({
  buttonText: String,
  value: String,
  preloader: Boolean
})

</script>

<template>
  <div>
    <div class="button">
      <div v-if="!props.preloader">
        <el-button :disabled="!props.value" type="primary" plain>{{
        props.buttonText
      }}</el-button>
      </div>
      <div v-else>
        <span class="loader"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  border: none;
  width: 337px;
  cursor: pointer;
  font-weight: 900;
  padding: 10px;
  color: white;
  letter-spacing: 2px;
  font-size: 16px;
  border-radius: 5px;
  background-color: rgb(0, 119, 255);
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.loader {
    width: 25px;
    height: 25px;
    border: 5px solid rgb(0, 119, 255);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
