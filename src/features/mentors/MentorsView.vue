<script setup>
import MentorsCard from '@/entities/mentors/MentorsCard.vue';
import SearchMentors from '@/entities/home/search/SearchMentors.vue';
import useMentorsView from '@/features/mentors/useMentorsView.js';
import NotFound from '@/entities/not-found/NotFound.vue';

const {
  formData,
  categories,
  mentors,
  isCategoriesLoading,
  isMentorsLoading,
  getMentorsBySkill,
  getMentorsByCategory,
  getMentorsByFilter,
} = useMentorsView();
</script>

<template>
  <main>
    <SearchMentors
      v-model="formData"
      v-model:skill="formData.skill"
      style="padding-top: 20px; margin-bottom: 30px"
      :categories="categories"
      :is-loading="isCategoriesLoading"
      @handle-search-by-skill="getMentorsBySkill"
      @handle-search-by-category="getMentorsByCategory"
      @handle-search-by-filter="getMentorsByFilter"
    />

    <div class="mentors-main">
      <MentorsCard
        v-if="mentors.length > 0 && !isMentorsLoading"
        :mentors="mentors"
        :is-loading="isMentorsLoading"
      />

      <NotFound v-else-if="!isMentorsLoading && mentors.length === 0" />
    </div>
  </main>
</template>

<style scoped>
.mentors-main {
  margin: 0 60px 60px 60px;
}
</style>
