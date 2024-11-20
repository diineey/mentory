<script setup>
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseTag from '@/shared/UI/BaseTag.vue';
import Arrow from '@/components/icons/arrow.svg';
import useMentorsCards from '@/entities/home/mentors-cards/useMentorsCards.js';

const props = defineProps({
  mentors: Array,
  isLoading: Boolean,
});

const { goToMentorDetails } = useMentorsCards();
</script>

<template>
  <div class="mentors-cards-wrapper">
    <h3 class="center">Наши менторы</h3>

    <div class="mentors-cards" style="display: flex; justify-content: center; position: relative">
      <img src="@/assets/images/mentors-blur.png" alt="Soon" width="100%" height="100%">
      
      <img src="@/assets/images/mentors-soon.png" alt="Soon" class="img-soon" >
<!--      <div-->
<!--        class="mentors-card"-->
<!--        v-for="mentor in props.mentors"-->
<!--        :key="mentor.id"-->
<!--      >-->
<!--        <img-->
<!--          class="mentors-card-photo"-->
<!--          src="../../../assets/images/card.jpg"-->
<!--          alt="Card"-->
<!--        />-->

<!--        <div class="mentors-card-text">-->
<!--          <p class="title" style="cursor: pointer" @click="goToMentorDetails(mentor.id)">-->
<!--            {{ mentor.user.firstname }} {{ mentor.user.lastname }}-->
<!--          </p>-->

<!--          <p class="text">{{ mentor.workplace }}</p>-->

<!--          <div class="mentors-tags">-->
<!--            <BaseTag-->
<!--              v-for="category in mentor.categoryList"-->
<!--              :key="category.name"-->
<!--              variant="tag-secondary"-->
<!--              :text="category.name"-->
<!--            />-->
<!--          </div>-->

<!--          <BaseButton-->
<!--            variant="button-no-fill"-->
<!--            @click="goToMentorDetails(mentor.id)"-->
<!--          >-->
<!--            <template #text> Подробнее </template>-->
<!--            <template #icon>-->
<!--              <Arrow />-->
<!--            </template>-->
<!--          </BaseButton>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
.img-soon {
  position: absolute;
  height: auto;
  width: 100%;
  top: 22%
}

.mentors-cards-wrapper {
  margin-top: 100px;
}

.mentors-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 60px;
  margin: 40px 0 60px 0;
  gap: 20px;
}

.mentors-card {
  background: var(--color-background-secondary);
  border-radius: 0 0 10px 10px;
}

.mentors-card-text {
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mentors-tags {
  display: flex;
  gap: 4px;
  margin-top: 4px;
}

.mentors-card-photo {
  height: 240px;
}

@media screen and (max-width: 1440px) {
  .mentors-cards {
    justify-content: center;
  }
}
</style>
