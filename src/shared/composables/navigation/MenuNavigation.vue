<script setup>
defineProps({
  backgroundColor: String
})
</script>

<template>
  <nav :style="{ backgroundColor: backgroundColor }" class="menu-nav center">
    <RouterLink
      to="mentors"
      class="menu"
      active-class="active-link-nav"
    >
      Менторы
    </RouterLink>

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

.menu:hover {
  color: var(--color-text-blue);
}

.active-link-nav {
  color: var(--color-text-blue)
}
</style>