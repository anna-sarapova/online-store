<template>
  <div>
    <NavBar />
    <MainSection/>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import MainSection from './MainSection';
export default {
  name: "MainPage",
  components: {
    NavBar,
    MainSection
  },
};
</script>

<style lang="scss">
div {
  width: 100%;
}
</style>
