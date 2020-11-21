<template>
  <div>
    <div class="product-section section" v-for="(category, index) in categories" :key="index">
      <div class="category-bar">
        <p>{{ category.categoryName }}</p>
      </div>
      <div class="category-item" v-for="(item, i) in category.items" :key="i">
        <img :src="item.image" />
        <p>{{ item.description }}</p>
        <p>{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSection",
  data() {
    return {
      categories: [
        {
          categoryName: "Phones",
          items: [
            {
              image: require("../assets/images/ZenBear.png"),
              description: "super phone 5000 black, big, with screen",
              price: "5$"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/css/GlobalStyles.scss");

.product-section {
    margin-top: 50px;
}

.section {
    display: flex;
    flex-direction: column;

    .category-bar{
        width: 100%;
        background-color: #ef8c18;
        text-align: center;
        font-family: 'Gilroy-Bold', sans-serif;
        font-size: 37px;
    }

    .category-item{
        width: 30%;
        border: 1px solid black;
        border-radius: 10px;
    }
}
</style>
