<template>
  <main class="when-wrapper promo-main">
    <div class="when-content">
      <h2 class="h2-promo">
        {{ $t('when-to-search') }}
      </h2>
      
      <p
        v-html="$t('when-to-search-text')"
        class="text-center p-promo"
      />
      
      <div class="when-cards">
        <div class="when-card">
          <div class="when-card-title">
            <p class="when-card-title-p p-promo">
              {{ $t('when-to-search-prepare') }}
            </p>
          </div>
          
          <div class="when-card-text">
            <p v-html="$t('when-to-search-prepare-text')" class="when-card-text-p p-promo" />
          </div>
        </div>
        
        <div class="when-card">
          <div class="when-card-title">
            <p class="when-card-title-p p-promo">
              {{ $t('when-to-search-team') }}
            </p>
          </div>
          
          <div class="when-card-text">
            <p class="when-card-text-p p-promo">
              {{ $t('when-to-search-team-text') }}
            </p>
          </div>
        </div>
        
        <div class="when-card">
          <div class="when-card-title">
            <p class="when-card-title-p p-promo">
              {{ $t('when-to-search-stuck') }}
            </p>
          </div>
          
          <div class="when-card-text">
            <p v-html="$t('when-to-search-stuck-text')" class="when-card-text-p p-promo" />
          </div>
        </div>
        
        <div class="when-card">
          <div class="when-card-title">
            <p class="when-card-title-p p-promo">
              {{ $t('when-to-search-level') }}
            </p>
          </div>
          
          <div class="when-card-text">
            <p class="when-card-text-p p-promo">
              {{ $t('when-to-search-level-text') }}
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </main>
</template>

<style scoped>
.when-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-background-soft);
  padding-bottom: 100px;
  border-radius: 40px 40px 0 0;
}

.when-content {
  width: 1020px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.when-cards {
  margin-top: 16px;
  width: 662px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 42px;
}

.when-card {
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.when-card-title {
  border-radius: 20px;
  background-color: var(--soft-red);
  padding: 10px;
  width: 305px;
}

.when-card-title-p {
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: var(--white);
}

.when-card-text {
  border-radius: 20px;
  padding: 0 10px;
  background-color: var(--blue);
  height: 130px;
  display: flex;
  align-items: center;
  width: 100%;
}

.when-card-text-p {
  color: var(--white);
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
}

@media screen and (max-width: 768px) {
  .when-wrapper {
    padding-bottom: 40px;
  }
  
  .when-content {
    width: 100%;
    padding: 20px 0;
  }
  
  .when-card {
    width: 298px;
  }
  
  .when-card-title {
    width: 293px;
  }
  
  .when-card-title-p {
    font-size: 18px;
    line-height: 19px;
  }
  
  .when-card-text-p {
    font-size: 16px;
    line-height: 17px;
  }
}

@media screen and (max-width: 670px) {
  .when-content {
    width: 100%;
  }
  
  .when-cards {
    gap: 20px;
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .when-card {
    width: 100%;
  }
  
  .when-cards {
    margin-top: 6px;
    gap: 10px;
  }
  
  .when-card-title {
    width: 100%;
    padding: 6px 0;
  }
  
  .when-card-text {
    height: max-content;
    padding: 10px;
  }
  
  .when-wrapper {
    padding: 20px;
  }
}
</style>