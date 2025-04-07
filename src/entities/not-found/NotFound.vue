<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const parameter = computed(() => route.query.parameter);
</script>

<template>
  <div class="not-found">
    <div class="not-found-section">
      <p class="title mb-1">
        По вашему запросу ничего не найдено: {{ parameter }}
      </p>

      <p class="input-text not-found-text">
        Убедитесь, что все слова написаны без ошибок.
      </p>
      <p class="input-text not-found-text">
        Попробуйте использовать другие ключевые слова.
      </p>
      <p class="input-text not-found-text">
        Попробуйте использовать более популярные ключевые слова.
      </p>
      <p class="input-text not-found-text">
        Попробуйте уменьшить количество слов в запросе.
      </p>
    </div>

    <img
      class="not-found-img"
      src="../../assets/images/not-found.png"
      alt="Not Found"
    >
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found-text {
  color: var(--color-text-main-grey);
}

.not-found-img {
  width: 222px;
  height: 222px;
  margin-top: 84px;
}

.not-found-section {
  width: 760px;
  display: flex;
  flex-direction: column;
}
</style>
