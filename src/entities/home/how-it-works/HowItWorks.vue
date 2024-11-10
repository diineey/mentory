<template>
  <div class="works-wrapper">
    <h3>
      Как это работает?
    </h3>

    <div class="works-cards">
      <div class="works-card">
        <p class="title">
          Выберите ментора по необходимому направлению
        </p>
        <p class="text">
          К примеру необходимо разобраться в Semantic UI
        </p>
      </div>

      <div class="works-card">
        <p class="title">
          Ознакомьтесь с кратким резюме ментора
        </p>
        <p class="text">
          Опыт работы, заслуги за годы службы, рейтинги, отзывы
        </p>
      </div>

      <div class="works-card">
        <p class="title">
          Бронируйте удобное для вас время
        </p>
        <p class="text">
          Вы можете выбрать удобное для вас время
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.works-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.works-cards {
  display: flex;
  gap: 20px;
  margin: 40px 0;
}

.works-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: var(--color-background-white);
  border-radius: 10px;
  max-width: 326px;
}
</style>
