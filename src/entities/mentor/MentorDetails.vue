<script setup>
import BaseButton from '@/shared/UI/BaseButton.vue';
import BaseTag from '@/shared/UI/BaseTag.vue';
import useMentorDetailsForm from '@/entities/mentor/useMentorDetails';
import {
  MentorDetailsFormEmits,
  MentorDetailsFormProps,
} from '@/entities/mentor/mentor-details.types';
import { formatAmount } from '@/shared/utils/formatters';
import EditIcon from '@/components/icons/edit.svg';

const props = defineProps(MentorDetailsFormProps);
const emit = defineEmits(MentorDetailsFormEmits);

const {
  decodedLanguages,
  experience,
  scrollToBookingSection,
  onOpenModal,
} = useMentorDetailsForm(props, emit);
</script>

<template>
  <div class="mentors-cards-wrapper">
    <div class="mentors-card-content">
      <div
        class="mentor-card-price"
        :class="{ 'mentor-editable': props.isEditable }"
      >
        <img
          v-if="props.mentorPhoto"
          class="mentors-img"
          :src="props.mentorPhoto"
          alt="photo"
        >

        <img
          v-else
          class="mentors-img"
          src="../../assets/images/card.jpg"
          alt="photo"
        >

        <p class="input-title mentor-price">
          Стоимость: {{ formatAmount(props.data.cost || 0) }} сум/час
        </p>

        <BaseButton
          v-if="!props.isEditable"
          class="book-button"
          variant="button-main"
          @click="scrollToBookingSection"
        >
          <template #text>
            Запросить консультацию
          </template>
        </BaseButton>
      </div>

      <div class="mentors-card-inner-content">
        <div class="mentor-sides">
          <div class="mentor-left-side">
            <div class="mentors-card-title">
              <p class="title">
                {{ props.data.firstname }} {{ props.data.lastname }}
              </p>

              <span
                v-if="experience"
                class="text"
              >
                ({{ experience }})
              </span>
            </div>

            <p class="text">
              {{ props.data.position }}

              <span v-if="props.data.position && props.data.workplace">
                -
              </span>

              {{ props.data.workplace }}
            </p>

            <p
              v-show="decodedLanguages"
              class="text"
            >
              Язык ментора: {{ decodedLanguages || '-' }}
            </p>

            <div class="mentors-card-tags mb-1">
              <BaseTag
                v-for="category in props.data.categoryList"
                :key="category"
                variant="tag-secondary"
                :text="category"
              />
            </div>
            <!--            <p class="text mentor-margins">0 - проведенных занятий</p>-->
          </div>

          <div v-if="props.isEditable">
            <BaseButton
              variant="button-no-fill-borders"
              @click="onOpenModal"
            >
              <template #icon>
                <EditIcon />
              </template>
              <template #text>
                Редактировать
              </template>
            </BaseButton>
          </div>
        </div>

        <p
          v-if="props.data.about"
          class="title-2"
        >
          О себе
        </p>

        <p
          v-if="props.data.about"
          class="text"
        >
          {{ props.data.about }}
        </p>

        <!--        <p class="title-2 mentor-margins">Опыт работы</p>-->
        <!--        <div class="experience">-->
        <!--          <p class="text">March 2023 — по настоящее время</p>-->
        <!--          <p class="text">-</p>-->
        <!--          <p class="text">Samokat — Senior QA</p>-->
        <!--        </div>-->

        <p
          v-if="props.data.canHelpWith"
          class="title-2 mentor-margins"
        >
          С чем могу помочь
        </p>

        <p
          v-if="props.data.canHelpWith"
          class="text mb-1"
        >
          {{ props.data.canHelpWith }}
        </p>

        <div
          v-if="props.data.skillList"
          class="mentors-card-tags"
        >
          <BaseTag
            v-for="skill in props.data.skillList"
            :key="skill"
            variant="tag-tertiary"
            :text="skill"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mentors-cards-wrapper {
  margin-top: 20px;
  background: var(--color-background-secondary);
}

.mentors-card-content {
  display: flex;
}

.mentors-img {
  width: 325px;
  height: 240px;
  object-fit: cover;
  object-position: center;
}

.mentors-card-inner-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.mentor-left-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mentor-sides {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.mentors-card-title {
  display: flex;
  gap: 4px;
}

.mentor-card-price {
  width: 325px;
  background-color: var(--color-background-white);
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 0 0 20px 20px;
}

.mentor-price {
  padding-left: 16px;
}

.mentors-card-title span {
  display: flex;
  align-items: end;
  justify-content: center;
}

.mentors-card-tags {
  display: flex;
  gap: 4px;
}

.mentor-margins {
  margin-top: 10px;
  margin-bottom: 10px;
}

.book-button {
  margin: 20px 0 20px 16px;
  width: 90%;
}

.mentor-editable {
  padding-bottom: 30px;
  margin-bottom: 20px;
}
</style>
