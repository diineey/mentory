<script setup>
import BaseInput from '@/shared/UI/BaseInput.vue';
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseTag from '@/shared/UI/BaseTag.vue';
import useSearchMentors from '@/entities/home/search/useSearchMentors.js';
import BaseForm from '@/shared/UI/BaseForm.vue';
import BaseFormItem from '@/shared/UI/BaseFormItem.vue';
import {
  SearchMentorsEmits,
  SearchMentorsProps,
} from '@/entities/home/search/search-mentors.types.js';

const props = defineProps(SearchMentorsProps);
const emit = defineEmits(SearchMentorsEmits);

const {
  skill,
  isSelected,
  updateModelValue,
  handleSearchMentorBySkill,
  handleSearchMentorByCategory,
} = useSearchMentors(props, emit);
</script>

<template>
  <div class="search-mentors center">
    <!--    <BaseForm-->
    <!--      no-prevent-route-->
    <!--      :model="props.modelValue"-->
    <!--      :rules="props.rules"-->
    <!--      @submit.prevent="handleSearchMentorBySkill"-->
    <!--    >-->
    <BaseForm
      no-prevent-route
      :model="props.modelValue"
      :rules="props.rules"
    >
      <div class="search">
        <base-form-item class="no-styles">
          <BaseInput
            v-model="skill"
            search
            placeholder="Навык или технология"
            @input="updateModelValue('skill', $event.target.value)"
          />
        </base-form-item>
        
        <BaseButton type="submit" variant="button-main">
          <template #text> Найти специалиста</template>
        </BaseButton>
      </div>
      
<!--      <div class="search-tags">-->
<!--        <BaseTag-->
<!--          v-for="tag in props.categories"-->
<!--          is-clickable-->
<!--          :key="tag.id"-->
<!--          :text="tag.name"-->
<!--          :variant="isSelected(tag) ? 'tag-selected' : 'tag-primary'"-->
<!--          @click="handleSearchMentorByCategory(tag)"-->
<!--        />-->
<!--      </div>-->
      
      <div class="search-tags">
        <BaseTag
          v-for="tag in props.categories"
          is-clickable
          :key="tag.id"
          :text="tag.name"
          :variant="isSelected(tag) ? 'tag-selected' : 'tag-primary'"
        />
      </div>
    </BaseForm>
  </div>
</template>

<style scoped>
.search-mentors {
  flex-direction: column;
  gap: 30px;
  padding-top: 100px;
  margin: 0 0 60px 0;
}

.search {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.no-styles {
  margin: 0;
  flex-direction: row;
  width: fit-content;
}

.search-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 30px 310px;
}
</style>
