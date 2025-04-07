<script setup>
defineProps({ backgroundColor: String, });
</script>

<template>
  <nav
    :style="{ backgroundColor: backgroundColor }"
    class="menu-nav center"
  >
    <RouterLink
      to="mentors"
      class="menu"
      active-class="active-link-nav"
      ы
    >
      Менторы
    </RouterLink>

    <!-- <div class="menu soon-link">
      <img src="@/assets/images/soon.png" alt="Soon" class="menu-soon">
      Менторы
    </div> -->

    <RouterLink
      to="faq"
      class="menu"
      active-class="active-link-nav"
    >
      FAQ
    </RouterLink>

    <RouterLink
      to="contacts"
      class="menu"
      active-class="active-link-nav"
    >
      Контакты
    </RouterLink>
  </nav>
</template>

<style scoped>
.menu-nav {
  display: flex;
  gap: 40px;
  padding: 20px 0 20px 0;
  transition: color 0.5s ease;
}

.menu-soon {
  width: 63px;
  position: absolute;
  top: -8px;
  left: -9px;
}

.menu:hover {
  color: var(--color-text-blue);
}

.soon-link {
  cursor: pointer;
  position: relative;
  color: var(--color-text-main-grey);
}

.soon-link:hover {
  color: var(--color-text-main-grey);
}

.active-link-nav {
  color: var(--color-text-blue);
}
</style>
