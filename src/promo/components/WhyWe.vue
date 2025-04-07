<script setup>
import useIsMobile from '@/promo/shared/utils/useIsMobile';

const {
  isMobile
} = useIsMobile();

const whyCards = [
  {
    imgSrc: new URL('../assets/img/experts.png', import.meta.url).href,
    altText: 'Expert mentors',
    title: 'experts',
    description: 'experts-text'
  },
  {
    imgSrc: new URL('../assets/img/individual.png', import.meta.url).href,
    altText: 'Individual approach',
    title: 'individual-approach',
    description: 'individual-approach-text'
  },
  {
    imgSrc: new URL('../assets/img/comfort.png', import.meta.url).href,
    altText: 'Convenience and flexibility',
    title: 'comfort',
    description: 'comfort-text'
  },
  {
    imgSrc: new URL('../assets/img/case.png', import.meta.url).href,
    altText: 'Convenience and flexibility',
    title: 'conditions',
    description: 'conditions-text'
  }
];
</script>

<template>
  <main class="why-wrapper promo-main">
    <div class="why-content">
      <div class="why-text">
        <h2 class="h2-promo">
          {{ $t('why-we') }}
        </h2>

        <p
          class="text-center p-promo"
          v-html="$t('we-create')"
        />
      </div>

      <swiper-container
        v-if="isMobile"
        class="why-cards"
        :slides-per-view="1.1"
        :breakpoints="{
          '650': {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          '570': {
            slidesPerView: 2.2,
            spaceBetween: 30
          },
          '450': {
            slidesPerView: 1.7,
            spaceBetween: 30
          },
          '375': {
            slidesPerView: 1.3,
            spaceBetween: 30
          }
        }"
      >
        <swiper-slide
          v-for="(card, index) in whyCards"
          :key="'second-'+ index"
        >
          <div class="why-card">
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
        class="why-cards"
      >
        <div
          v-for="(card, index) in whyCards"
          :key="'second-'+ index"
          class="why-card"
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
.why-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.why-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.why-text {
  max-width: 100%;
  width: 516px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.why-cards {
  margin-top: 16px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.why-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 314px;
  gap: 10px;
}

.why-cards img {
  width: 220px;
  height: 220px;
}

@media screen and (max-width: 768px) {
  .why-wrapper {
    padding-bottom: 40px;
  }

  .why-content {
    width: 100%;
    padding-top: 20px;
  }

  .why-cards {
    width: 100%;
  }

  .why-card {
    width: 240px;
    padding: 0;
    align-items: flex-start;
  }

  .why-card p, h3 {
    text-align: left;
  }

  .why-card img {
    width: 160px;
    height: 160px;
  }
}
</style>