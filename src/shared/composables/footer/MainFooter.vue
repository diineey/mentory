<script setup>
import useMainFooter from '@/shared/composables/footer/useMainFooter.js';
import Logo from '@/assets/logo.svg';

const {
  isAuthenticated,
  downloadAgreement,
  downloadMentyAgreement,
  downloadMentorAgreement
} = useMainFooter();
</script>

<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-main-section">
        <div class="footer-logo">
          <Logo class="logo-color" />
        </div>

        <div class="footer-column">
          <RouterLink
            class="footer-link menu-footer"
            to="/mentors"
          >
            Наши менторы
          </RouterLink>

          <RouterLink
            class="footer-link menu-footer"
            to=""
          >
            FAQ
          </RouterLink>

          <RouterLink
            class="footer-link menu-footer"
            :to="isAuthenticated ? '/be-mentor' : '/sign-in'"
          >
            Стать ментором
          </RouterLink>

          <p
            class="footer-link menu-footer"
            @click="downloadAgreement"
          >
            Пользовательское соглашение
          </p>

          <p
            class="footer-link menu-footer"
            @click="downloadMentyAgreement"
          >
            Оферта менти
          </p>

          <p
            class="footer-link menu-footer"
            @click="downloadMentorAgreement"
          >
            Оферта ментора
          </p>
        </div>

        <div class="footer-column ml-30">
          <!--          <a class="footer-link menu-footer" href="tel:998901001111">+99890 100-11-11</a>-->
          <a
            class="footer-link menu-footer"
            href="mailto:hello@mentory.uz"
          >hello@mentory.uz</a>
        </div>
      </div>

      <div class="divider" />

      <div class="copyrights center">
        <p class="menu-footer">
          © 2024 Mentory. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-background-blue);
  width: 100%;
}

.footer-link {
  cursor: pointer;
}

.footer-link:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
  width: fit-content;
}

.footer-main-section {
  padding: 40px 60px 45px 60px;
  display: flex;
  gap: 200px;
}

.footer-logo {
  display: flex;
  align-items: start;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.divider {
  height: 2px;
  background-color: var(--color-background-white);
}

.copyrights {
  padding: 22px;
}

.logo-color {
  color: var(--color-background-white);
}
</style>
