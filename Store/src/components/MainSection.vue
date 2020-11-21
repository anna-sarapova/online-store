<template>
  <section class="main-section section">
    <div class="main-image">
      <p>This online store will help you find what you want.</p>

      <button class="btn">Learn more</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSection"
};
</script>

<style lang="scss" scoped>
@import url('../assets/css/GlobalStyles.scss');

.main-section {
  width: 100%;
  max-width: 1250px;
  height: 500px;
  margin: 0 auto;

  .main-image {
    font-size: 45px;
    line-break: 50px;
    height: 90%;
    font-family: "Gilroy-Bold", sans-serif;
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: 25px;
    background-color: #c4c4c4;
    padding-left: 40px;
    border-radius: 10px;

    p {
      width: 70%;
      margin: 0;
      padding-top: 40px;
    }

    .btn {
      position: relative;
      top: 200px;
      font-family: "Gilroy-Regular", sans-serif;
      padding: 20px;
      border: none;

      &:hover {
        transform: scale(1.03);
        transition-duration: 0.3s;
        cursor: pointer;
      }
    }
  }
}
</style>
