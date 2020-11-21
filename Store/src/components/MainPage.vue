<template>
  <div>
    <NavBar />
    <MainSection/>
    <CategorySection/>
    <ProductSection/>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import MainSection from './MainSection';
import CategorySection from './CategorySection';
import ProductSection from './ProductSection'

export default {
  name: "MainPage",
  components: {
    NavBar,
    MainSection,
    CategorySection,
    ProductSection
  },
};
</script>

<style lang="scss">
div {
  width: 100%;
}
</style>
