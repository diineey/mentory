<script setup>
import BaseButton from '@/promo/shared/UI/BaseButton.vue';
import LanguagesSwitch from '@/promo/shared/composables/languages-switch/LanguagesSwitch.vue';
import {
  onMounted, ref
} from 'vue';
import LogoUrl from '@/promo/assets/img/logo.svg?url';
import Menu from '@/promo/assets/icons/menu.svg';
import HeaderImg from '@/promo/assets/img/header-img.svg?url';
import CloseIcon from '@/promo/assets/icons/close.svg';
import Linkedin from '@/promo/assets/icons/linkedin.svg';
import Instagram from '@/promo/assets/icons/instagram.svg';
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);

const router = useRouter();

function preloadImages() {
  const images = [
    new URL('@/promo/assets/img/logo.svg', import.meta.url).href,
    new URL('@/promo/assets/img/telegram.png', import.meta.url).href,
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

onMounted(() => {
  preloadImages();
});

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
</script>

<template>
  <header class="header-wrapper-promo">
    <div class="header-section-black">
      <div class="header-menu">
        <img
          :src="LogoUrl"
          alt="Logo"
          class="logo"
          @click="router.push('/')"
        >

        <div class="header-menu-lang">
          <LanguagesSwitch />
        </div>

        <div
          class="menu-icon"
          @click="toggleMenu"
        >
          <Menu
            width="32"
            height="24"
          />
        </div>
      </div>

      <div class="header-section-text">
        <h1
          class="h1-promo"
          v-html="$t('header-title')"
        />

        <p
          class="header-section-p p-promo"
          v-html="$t('header-text')"
        />

        <BaseButton color="--white" />
      </div>
    </div>

    <div class="header-section-blue">
      <div class="lang">
        <LanguagesSwitch />
      </div>

      <div class="header-img">
        <img
          :src="HeaderImg"
          alt="Image"
          class="header-img"
        >
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="menu-overlay"
    >
      <div class="menu-icon-close">
        <CloseIcon
          width="32"
          height="24"
          @click="toggleMenu"
        />
      </div>

      <div class="menu-promo">
        <div>
          <img
            :src="LogoUrl"
            alt="Logo"
            class="menu-logo"
            @click="router.push('/')"
          >
        </div>

        <div class="menu-lang">
          <LanguagesSwitch />
        </div>

        <div class="tg-img">
          <img
            src="@/promo/assets/img/telegram.png"
            alt="Telegram"
            width="171"
            height="auto"
          >
        </div>

        <BaseButton class="menu-button" />

        <div class="menu-icons">
          <a
            class="a-promo"
            href="https://www.linkedin.com/company/mentoryuz"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            class="a-promo"
            href="https://www.instagram.com/mentory.uz"
            target="_blank"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header-wrapper-promo {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  border-radius: 0 0 30px 30px;
  position: relative;
  font-family: 'Zen Kaku Gothic Antique', sans-serif !important;
}

.header-section-black {
  background-color: var(--black);
  width: 50%;
  padding: 33px 0 0 60px;
  color: var(--white);
  border-radius: 0 0 0 30px;
}

.header-section-blue {
  background-color: var(--blue);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0 0 0;
  border-radius: 0 0 30px 0;
}

.header-menu {
  display: flex;
  justify-content: space-between;
}

.header-menu-lang {
  display: none;
}

.menu-icon, .menu-icon-close {
  cursor: pointer;
}

.menu-icon-close {
  padding: 40px 20px 0 0;
}

.menu-icon {
  display: none;
}

.menu-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: var(--black);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}

.menu-promo {
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-icon-close {
  display: flex;
  justify-content: end;
  flex: 1;
}

.menu-icon-close img {
  display: flex;
  justify-content: end;
}

.menu-logo {
  display: flex;
  align-items: center;
  margin: 28px 0 52px 0;
}

.tg-img {
  margin: 83px 0 35px 0;
}

.menu-button {
  margin-bottom: 55px;
}

.menu-icons {
  display: flex;
  gap: 24px;
}

.header-section-blue:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-section-text {
  padding: 136px 52px 105px 0;
}

.header-section-p {
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  padding: 41px 0 24px 0;
}

.lang {
  display: flex;
  height: 24px;
  justify-content: end;
  padding-right: 60px;
}

.header-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-img img {
  width: 602px;
  height: auto;
}

.logo {
  cursor: pointer;
}

@media screen and (max-width: 1300px) {
  .header-img img {
    width: 500px;
    height: auto;
    padding-top: 136px;
  }
}

@media screen and (max-width: 1023px) {
  .header-wrapper-promo {
    flex-direction: column;
    border-radius: 0 0 26px 26px;
  }

  .header-section-black,
  .header-section-blue {
    width: 100%;
    border-radius: 0 0 26px 26px;
  }

  .header-menu-lang {
    display: block;
    padding-right: 60px;
  }

  .header-section-blue {
    padding: 0;
  }

  .header-img img {
    padding: 0;
  }

  .lang {
    display: none;
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  br {
    display: none;
  }

  .header-section-black {
    padding: 40px 20px 30px 20px;
  }

  .logo {
    width: 134px;
  }

  .header-menu-lang {
    display: none;
  }

  .header-section-text {
    padding: 45px 0 10px 0;
  }

  .header-section-p {
    font-size: 18px;
    line-height: 23px;
    padding: 16px 0 20px 0;
  }

  .header-section-blue {
    padding: 0;
  }

  .header-img img {
    padding: 0;
    width: 400px;
    height: auto;
  }

  .menu-icon {
    display: flex;
  }
}

@media screen and (max-width: 425px) {
  .header-img img {
    width: 339px;
    height: auto;
  }
}

@media screen and (max-width: 350px) {
  .header-img img {
    width: 300px;
    height: auto;
  }
}
</style>
