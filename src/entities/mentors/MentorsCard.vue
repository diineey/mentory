<script setup>
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseTag from '@/shared/UI/BaseTag.vue';
import Arrow from '@/components/icons/arrow.svg';
import {
  formatAmount,
  formatYearsAndMonths,
} from '@/shared/utils/formatters';
import useMentorsCard from '@/entities/mentors/useMentorsCard';
import { languageMap } from '@/shared/utils/enums';

const props = defineProps({
  mentors: Array,
  isLoading: Boolean,
});

const {
  goToMentor
} = useMentorsCard();
</script>

<template>
  <div
    v-for="mentor in props.mentors"
    :key="mentor.id"
    class="mentors-cards-wrapper"
  >
    <div class="mentors-card-content">
      <img
        v-if="mentor.photoUrl"
        class="mentors-img"
        :src="mentor.photoUrl"
        alt="photo"
      >

      <img
        v-else
        class="mentors-img"
        src="../../assets/images/card.jpg"
        alt="photo"
      >

      <div class="mentors-card-inner-content">
        <div class="mentors-card-title">
          <p
            class="title mentors-title"
            @click="goToMentor(mentor.id)"
          >
            {{ mentor.user.firstname }} {{ mentor.user.lastname }}
          </p>

          <span class="text">
            ({{
              formatYearsAndMonths(mentor.yearsOfExperience || 0)
            }})</span>
        </div>

        <p class="text">
          {{ mentor.position }} - {{ mentor.workplace }}
        </p>

        <p class="text">
          Язык ментора:
          {{
            mentor?.user?.languages
              ?.map((code) => languageMap[code] || code)
              .join(', ')
          }}
        </p>

        <div class="mentors-card-tags">
          <BaseTag
            v-for="category in mentor.categoryList"
            :key="category.name"
            variant="tag-secondary"
            :text="category.name"
          />
        </div>

        <div class="mentors-card-about">
          <p class="text">
            {{ mentor.about }}
          </p>
        </div>

        <!--        <div class="mentors-card-list">-->
        <!--          <ul class="mentors-card-list-wrapper">-->
        <!--            <li class="text">Помогу дизайнерам с поиском работы и себя</li>-->
        <!--            <li class="text">Объективно оценю уровень и резюме</li>-->
        <!--            <li class="text">Подскажу по тестовому и рабочим задачам</li>-->
        <!--            <li class="text">Могу рассказать как дизайнеру стать миллионером</li>-->
        <!--            <li class="text">Работаю с компаниями по ...</li>-->
        <!--          </ul>-->
        <!--        </div>-->

        <div class="mentors-card-tags">
          <BaseTag
            v-for="skill in mentor.skillList"
            :key="skill.id"
            variant="tag-tertiary"
            :text="skill.name"
          />
        </div>
      </div>

      <div class="mentors-card-price">
        <p class="text weight-6">
          Цена одной консультации:
        </p>

        <p class="price">
          {{ formatAmount(mentor.rate.costPerHour || 0) }} uzs
        </p>

        <BaseButton
          class="mt-1"
          variant="button-main"
          @click="goToMentor(mentor.id)"
        >
          <template #text>
            Посмотреть
          </template>
          <template #icon>
            <Arrow />
          </template>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mentors-cards-wrapper {
  background: var(--color-background-secondary);
  margin: 20px 0;
}

.mentors-card-content {
  display: flex;
  gap: 20px;
}

.mentors-img {
  width: 314px;
  height: 240px;
  object-fit: cover;
}

.mentors-card-inner-content {
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 745px;
}

.mentors-card-title {
  display: flex;
  gap: 4px;
}

.mentors-card-title span {
  display: flex;
  align-items: end;
  justify-content: center;
}

.mentors-card-price {
  padding: 20px 20px 0 0;
  margin-left: auto;
}

.mentors-title {
  cursor: pointer;
}

.price {
  font-size: 30px;
  font-family: 'Gilroy-Semibold', sans-serif;
}

.mentors-card-tags {
  display: flex;
  gap: 4px;
}

.mentors-card-list-wrapper {
  padding: 10px 0 10px 20px;
}

.mentors-card-about {
  margin: 10px 0;
}
</style>
