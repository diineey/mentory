<script setup>
import BaseButton from '@/promo/shared/UI/BaseButton.vue';
</script>

<template>
  <main class="telegram-card-wrapper promo-main">
    <div class="telegram-card">
      <div class="telegram-card-text">
        <h3 class="h3-promo">
          {{ $t('not-skip') }}
        </h3>

        <p class="telegram-card-p p-promo">
          {{ $t('subscribe') }}
        </p>

        <BaseButton color="#0066FE" />
      </div>

      <div class="telegram-card-img">
        <img
          src="@/promo/assets/img/telegram.png"
          alt="Telegram"
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
.telegram-card-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 100px;
}

.telegram-card {
  background-color: var(--color-background-secondary);
  border-radius: 20px;
  padding: 25px 58px 45px 40px;
  width: 964px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.telegram-card-img {
  display: flex;
  align-items: center;
  justify-content: right;
  width: 35%;
}

.telegram-card img {
  display: flex;
  width: 268px;
  height: 224px;
}

.telegram-card-text {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 65%;
}

.telegram-card h3 {
  text-align: left;
}

.telegram-card-p {
  padding-bottom: 32px;
}

@media screen and (max-width: 1023px) {
  .telegram-card {
    padding-right: 40px;
  }

  .telegram-card img {
    width: 200px;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .telegram-card img {
    width: 171px;
    height: auto;
  }

  .telegram-card-p {
    padding-bottom: 0;
  }

  .telegram-card {
    height: auto;
    padding: 25px 25px 40px 25px;
  }
}

@media screen and (max-width: 768px) {
  .telegram-card {
    flex-direction: column;
    padding: 40px 20px 48px 20px;
  }

  .telegram-card-img {
    order: 1;
    width: 100%;
    justify-content: center;
  }

  .telegram-card-img img {
    justify-content: center;
  }

  .telegram-card-text {
    order: 2;
    width: 100%;
    gap: 16px;
    align-items: center;
  }

  .telegram-card-p {
    width: 60%;
    margin-bottom: 4px;
    text-align: center;
  }

  .telegram-card-wrapper {
    padding: 0;
  }
}

@media screen and (max-width: 527px) {
  .telegram-card-p {
    width: 100%;
    text-align: left;
  }

  .telegram-card-text {
    align-items: start;
  }
}
</style>