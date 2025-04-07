<script setup>
import useIsMobile from '@/promo/shared/utils/useIsMobile';

const {
  isMobile
} = useIsMobile();

const cards = [
  {
    imgSrc: new URL('../assets/img/personal.png', import.meta.url).href,
    altText: 'Personal Approach',
    title: 'personal-approach',
    description: 'personal-specialists'
  },
  {
    imgSrc: new URL('../assets/img/data-cloud.png', import.meta.url).href,
    altText: 'Feedback',
    title: 'feedback',
    description: 'feedback-help'
  },
  {
    imgSrc: new URL('../assets/img/rent.png', import.meta.url).href,
    altText: 'Easy booking',
    title: 'easy-booking',
    description: 'easy-booking-text'
  }
];
</script>

<template>
  <main class="works-wrapper promo-main">
    <div class="works-content">
      <h2 class="h2-promo">
        {{ $t('how-it-works') }}
      </h2>

      <p
        class="text-center p-promo"
        v-html="$t('mentory-is')"
      />

      <swiper-container
        v-if="isMobile"
        class="work-cards"
        :space-between="20"
        :slides-per-view="1.1"
        :breakpoints="{
          '650': {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          '570': {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          '450': {
            slidesPerView: 1.8,
            spaceBetween: 20
          },
          '375': {
            slidesPerView: 1.4,
            spaceBetween: 30
          }
        }"
      >
        <swiper-slide
          v-for="(card, index) in cards"
          :key="'first-' + index"
        >
          <div class="works-card">
            <img
              :src="card.imgSrc"
              :alt="card.altText"
            >
            <h3 class="h3-promo">
              {{ $t(card.title) }}
            </h3>
            <p class="text-center p-promo">
              {{ $t(card.description) }}
            </p>
          </div>
        </swiper-slide>
      </swiper-container>

      <div
        v-else
        class="works-cards"
      >
        <div
          v-for="(card, index) in cards"
          :key="'first-' + index"
          class="works-card"
        >
          <img
            :src="card.imgSrc"
            :alt="card.altText"
          >
          <h3 class="h3-promo">
            {{ $t(card.title) }}
          </h3>
          <p class="text-center p-promo">
            {{ $t(card.description) }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.works-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.works-content {
  width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
}

.works-cards {
  margin-top: 16px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.works-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 373px;
  gap: 10px;
}

.works-cards img {
  width: 260px;
  height: 260px;
}

@media screen and (max-width: 768px) {
  .works-wrapper {
    padding-bottom: 40px;
  }

  .works-content {
    width: 100%;
    padding-top: 20px;
    gap: 20px;
  }

  .works-cards {
    width: 100%;
  }

  .works-card {
    width: 240px;
    padding: 0;
    align-items: flex-start;
  }

  .works-card p, h3 {
    text-align: left;
  }

  .works-card img {
    width: 180px;
    height: auto;
  }
}
</style>
