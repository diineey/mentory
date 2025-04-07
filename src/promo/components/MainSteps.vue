<script setup>
import useIsMobile from '@/promo/shared/utils/useIsMobile.js';

const { isMobileForSteps } = useIsMobile();
</script>

<template>
  <div class="main-steps">
    <main class="steps-wrapper promo-main">
      <div class="mentor-steps">
        <h2 class="mentors-h2 h2-promo">
          {{ $t('how-to-find') }}
        </h2>

        <div class="step">
          <div class="step-content">
            <img
              src="../assets/img/01.png"
              alt="Step 1"
            >
            <div class="step-info">
              <div class="number">
                <p>1</p>
              </div>
              <p
                class="step-info-p p-promo"
                v-html="$t('step-1')"
              />
            </div>

            <hr class="step-divider">
          </div>
        </div>

        <div class="step">
          <div class="step-content">
            <img
              src="../assets/img/02.png"
              alt="Step 2"
            >
            <div class="step-info">
              <div class="number">
                <p>2</p>
              </div>
              <p
                class="step-info-p text-right p-promo"
                v-html="$t('step-2')"
              />
            </div>

            <hr class="step-divider">
          </div>
        </div>

        <div class="step">
          <div class="step-content">
            <img
              src="../assets/img/03.png"
              alt="Step 3"
            >
            <div class="step-info">
              <div class="number">
                <p>3</p>
              </div>
              <p
                class="step-info-p p-promo"
                v-html="$t('step-3')"
              />
            </div>

            <hr class="step-divider">
          </div>
        </div>

        <div class="step">
          <div class="step-content">
            <img
              src="../assets/img/04.png"
              alt="Step 4"
            >
            <div class="step-info">
              <div class="number">
                <p>4</p>
              </div>
              <p
                class="step-info-p text-right p-promo"
                v-html="$t('step-4')"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="gradient-1">
        <img
          v-if="isMobileForSteps"
          src="@/promo/assets/img/gradient-mobile-1.png"
          alt="Gradient"
        >

        <img
          v-else
          src="@/promo/assets/img/gradient1.png"
          alt="Gradient"
        >
      </div>

      <div class="gradient-2">
        <img
          v-if="isMobileForSteps"
          src="@/promo/assets/img/gradient-mobile-2.png"
          alt="Gradient"
        >

        <img
          v-else
          src="@/promo/assets/img/gradient2.png"
          alt="Gradient"
        >
      </div>
    </main>
  </div>
</template>

<style>
.main-steps {
  width: 100%;
  background: linear-gradient(to bottom, #FFEFEF, white);
}

.steps-wrapper {
  background-color: var(--black);
  color: var(--white);
  width: 100%;
  position: relative;
  border-radius: 40px;
  overflow: hidden;
}

.mentor-steps {
  width: 100%;
}

.step {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  justify-content: center;
}

.step-content {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  z-index: 2;
  position: relative;
}

.step img {
  width: 485px;
}

.step-info {
  display: flex;
  gap: 30px;
  width: 608px;
  z-index: 99;
}

.number {
  border-radius: 50%;
  width: 94px;
  height: 94px;
  display: flex;
  padding: 29px 37px;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: 'Gilroy-Extrabold', sans-serif;
  font-size: 34px;
  line-height: 110%;
  font-feature-settings: "tnum";
}

.step-info p:first-child {
  font-weight: 800;
  color: var(--black);
}

.step-info p {
  font-weight: 900;
  font-size: 34px;
  line-height: 37px;
  width: 503px;
}

.step-info p span {
  background: var(--blue);
  color: white;
  font-weight: 900;
  line-height: 25px;
  display: inline-block;
  padding: 0 10px 10px 10px;
}

.step:nth-of-type(2) .step-info span {
  background: #ff6600;
}

.step:last-child .step-info span {
  background: #ff6600;
}

.step:nth-of-type(2) .step-content,
.step:nth-of-type(4) .step-content {
  flex-direction: row-reverse;
}

.step:nth-of-type(2) .step-info,
.step:nth-of-type(4) .step-info {
  flex-direction: row-reverse;
}

.step-divider {
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
  width: 350px;
  height: 4px;
  background-image: linear-gradient(90deg, #fff, #fff 50%, transparent 50%, transparent 100%);
  background-size: 40px 20px;
  border: none;
  z-index: 2;
}

.gradient-1 {
  position: absolute;
  top: 0;
  left: 0;
}

.gradient-1 img,
.gradient-2 img {
  width: auto;
  height: 714px;
}

.gradient-2 {
  position: absolute;
  right: 0;
  bottom: 0;
}

.mentors-h2 {
  color: var(--white);
  margin-bottom: 152px;
}

.text-right {
  text-align: right;
}

@media screen and (max-width: 1257px) {
  .step-info {
    width: 524px;
  }

  .step:nth-of-type(1) br{
    display: none;
  }

  .step:nth-of-type(4) br{
    display: inline;
  }

  .step-content img {
    width: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .step-content,
  .step:nth-of-type(2) .step-content,
  .step:nth-of-type(4) .step-content {
    flex-direction: column;
  }

  .step:nth-of-type(2) .step-info,
  .step:nth-of-type(4) .step-info {
    flex-direction: row;
  }

  .step-info {
    order: 1;
  }

  .step-content img {
    order: 2;
  }

  .gradient-1 img,
  .gradient-2 img {
    width: auto;
    height: 800px;
  }

  .step-divider {
    left: 8.5%;
    top: 64%;
  }

  .step-content img {
    margin-left: 120px;
  }

  .text-right {
    text-align: left;
  }

  .mentors-h2 {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 768px) {
  .steps-wrapper {
    padding: 40px 20px;
  }

  .step-content {
    gap: 34px;
  }

  .step-info {
    gap: 10px;
    width: 305px;
  }

  .step-info p {
    font-weight: 900;
    font-size: 16px;
    line-height: 17px;
  }

  .step-info p span {
    padding: 0 5px 5px 5px;
    line-height: 12px;
  }

  .step:nth-of-type(1) .step-info p {
    width: 200px;
  }

  .mentors-h2 {
    margin-bottom: 36px;
  }

  .number {
    width: 54px;
    height: 54px;
    padding: 15px 22px;
  }

  .number p {
    font-size: 26px;
    line-height: 28px;
  }

  .step-content img {
    width: 256px;
    margin-left: 65px;
  }

  .step-divider {
    left: 8.5%;
    top: 64%;
    height: 3px;
    width: 260px;
  }

  .gradient-1 img,
  .gradient-2 img {
    width: auto;
    height: 500px;
  }
}

@media screen and (max-width: 540px) {
  .gradient-1 img {
    height: 300px;
  }

  .gradient-2 img {
    height: 400px;
  }
}
</style>