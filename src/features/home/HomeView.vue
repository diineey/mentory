<script setup>
import FindMentor from '@/entities/home/find-mentor/FindMentor.vue';
import HowItWorks from '@/entities/home/how-it-works/HowItWorks.vue';
import SearchMentors from '@/entities/home/search/SearchMentors.vue';
import MentorsCards from '@/entities/home/mentors-cards/MentorsCards.vue';
import useHomeView from '@/features/home/useHomeView.js';

const {
  formData,
  categories,
  mentors,
  isCategoriesLoading,
  isMentorsLoading,
  handleSearchMentorsBySkill,
  handleSearchMentorsByCategory,
} = useHomeView();
</script>

<template>
  <main>
    <section class="mentory-section">
      <FindMentor />
    </section>

    <section class="mentors-section">
      <img
        class="img-left"
        src="../../assets/images/left-bg.png"
        alt=""
      >

      <img
        class="img-right"
        src="../../assets/images/right-bg.png"
        alt=""
      >

      <img
        class="img-left-b"
        src="../../assets/images/left-b-bg.png"
        alt=""
      >

      <img
        class="img-right-b"
        src="../../assets/images/right-b-bg.png"
        alt=""
      >

      <SearchMentors
        v-model="formData"
        v-model:skill="formData.skill"
        :categories="categories"
        :is-loading="isCategoriesLoading"
        @handle-search-by-skill="handleSearchMentorsBySkill"
        @handle-search-by-category="handleSearchMentorsByCategory"
      />

      <MentorsCards
        :is-loading="isMentorsLoading"
        :mentors="mentors"
      />
    </section>

    <section class="works-section">
      <HowItWorks />
    </section>
  </main>
</template>

<style scoped>
.mentory-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-secondary);
  padding: 0 60px 60px 60px;
  gap: 60px;
}

.mentors-section {
  position: relative;
}

.img-left {
  position: absolute;
  top: 25px;
  left: 0;
  width: 300px;
  height: auto;
}

.img-right {
  position: absolute;
  top: 25px;
  right: 0;
  width: 300px;
  height: auto;
}

.img-left-b {
  position: absolute;
  top: 160px;
  left: 0;
  width: 300px;
  height: auto;
}

.img-right-b {
  position: absolute;
  top: 220px;
  right: 0;
  width: 264px;
  height: auto;
}

.works-section {
  display: flex;
  justify-content: center;
  background-color: var(--color-background-secondary);
  padding: 100px 0;
}
</style>
