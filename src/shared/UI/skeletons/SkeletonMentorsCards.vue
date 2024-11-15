<template>
  <div class="mentors-cards-wrapper">
    <div class="mentors-card-content">
      <div class="mentors-img skeleton pulsing-background"></div>

      <div class="mentors-card-inner-content">
        <div class="mentors-card-title">
          <div class="skeleton title-skeleton pulsing-background"></div>
          <div class="skeleton years-skeleton pulsing-background"></div>
        </div>

        <div class="skeleton language-skeleton pulsing-background"></div>

        <div class="mentors-card-tags">
          <div
            class="skeleton tag-skeleton pulsing-background"
            v-for="n in 3"
            :key="n"
          ></div>
        </div>

        <div class="mentors-card-list">
          <div class="mentors-card-list-wrapper">
            <div
              class="skeleton bullet-skeleton pulsing-background"
              v-for="n in 4"
              :key="n"
            ></div>
          </div>
        </div>

        <div class="mentors-card-tags">
          <div
            class="skeleton tag-skeleton pulsing-background"
            v-for="n in 3"
            :key="n"
          ></div>
        </div>
      </div>

      <div class="mentors-card-price">
        <div class="skeleton price-skeleton pulsing-background"></div>
        <div class="skeleton button-skeleton pulsing-background"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes color-wave {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #b0b0b0;
  }
  100% {
    background-color: var(--color-background-tertiary-grey);
  }
}

.pulsing-background {
  animation: color-wave 3s infinite;
}

.mentors-cards-wrapper {
  background: var(--color-background-secondary);
  margin: 20px 0;
}

.mentors-card-content {
  display: flex;
  gap: 20px;
}

.skeleton {
  width: 314px;
  height: 240px;
  background-color: var(--color-background-tertiary-grey);
  margin-bottom: 10px;
}

.title-skeleton,
.years-skeleton,
.language-skeleton,
.price-skeleton,
.button-skeleton {
  height: 20px;
}

.title-skeleton {
  width: 80% !important;
}

.mentors-card-list-wrapper {
  margin: 16px 0;
}

.mentors-card-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tag-skeleton {
  height: 20px;
  width: 80px;
  border-radius: 6px;
  background-color: var(--color-background-tertiary-grey);
}

.bullet-skeleton {
  width: 50%;
  height: 16px;
  margin: 4px 0;
}

.mentors-card-price {
  margin-left: auto;
}
</style>
