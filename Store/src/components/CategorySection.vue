<template>
  <section class="category-section section">
    <div class="button-section">
      <button class="btn">Phones</button>

      <button class="btn">Laptops</button>

      <button class="btn">Tablets</button>

      <button class="btn">HeadPhones</button>

      <button class="btn">Watches & clocks</button>

      <button class="btn">Gadgets</button>

      <button class="btn">Glasses</button>

      <button class="btn">Games</button>

      <button class="btn">Accessories</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "CategorySection"
};
</script>
<style lang="scss" scoped>
@import url("../assets/css/GlobalStyles.scss");

.category-section {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 100px 40px;
  position: relative;

  .button-section {
    display: grid;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 100px 100px 100px;

    .btn {
      &:hover{
        transform: scale(1.03);
        transition-duration: 0.3s;
        cursor: pointer;
      }
    }
  }
}
</style>
