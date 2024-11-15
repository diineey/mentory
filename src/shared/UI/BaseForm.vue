<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { defineExpose } from 'vue';

const props = defineProps({
  model: Object,
  rules: Object,
  noPreventRoute: Boolean,
});

const formRef = ref(null);
let canceled = false;
let firstLoad = true;
let isModelChanged = false;

function cancel() {
  window.onbeforeunload = null;
  canceled = true;
}

if (!props.noPreventRoute) {
  watch(
    () => props.model,
    () => {
      if (firstLoad) return;

      window.onbeforeunload = () => true;
      isModelChanged = true;
    },
    {
      deep: true,
    }
  );

  onBeforeRouteLeave((_, __, next) => {
    if (!canceled && isModelChanged) {
      const answer = window.confirm(
        'Вы действительно хотите уйти? Изменения не сохранены.'
      );

      if (!answer) return false;
    }

    next();
  });
}

onMounted(() => {
  setTimeout(() => {
    firstLoad = false;
  }, 2000);
});

onBeforeUnmount(() => {
  cancel();
});

defineExpose({
  validate: () => formRef.value?.validate(),
  resetValidation: () => formRef.value?.resetValidation(),
  cancel,
});
</script>

<template>
  <form ref="formRef" v-bind="$attrs" @submit.prevent>
    <slot />
  </form>
</template>

<style scoped></style>
