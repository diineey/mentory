<script setup lang="ts">
import Header from '@/promo/shared/composables/header/BaseHeader.vue';
import Footer from '@/promo/shared/composables/footer/BaseFooter.vue';
import WhenToSearch from '@/promo/components/WhenToSearch.vue';
import HowItWorks from '@/promo/components/HowItWorks.vue';
import MainSteps from '@/promo/components/MainSteps.vue';
import TelegramCard from '@/promo/components/TelegramCard.vue';
import WhyWe from '@/promo/components/WhyWe.vue';

</script>

<template>
  <Header class="font" />

  <HowItWorks class="font" />

  <WhenToSearch class="font" />

  <MainSteps class="font" />

  <WhyWe class="font" />

  <TelegramCard class="font" />

  <Footer class="font" />
</template>

<style lang="scss" scoped>
.font {
  font-family: 'Zen Kaku Gothic Antique', sans-serif !important;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
}
</style>