<template>
  <nav class="nav-commponent">
    <a href="#"><img class="logo" src="../assets/images/ZenBear.png" /></a>
    <div class="wrapper">
      <a href="#" class="nav-element">Home</a>
    </div>
    <div class="wrapper">
      <a href="#" class="nav-element">Categories</a>
    </div>
    <div class="wrapper">
      <a href="#" class="nav-element">Offers</a>
    </div>
    <div class="wrapper">
      <a href="#" class="nav-element">Contacts</a>
    </div>
    <div class="nav-left-block">
      <div class="cart-block">
        <img class="bag-svg" src="../assets/svgs/bag.svg" />
        <p>Cart</p>
      </div>
      <div class="search-block">
        <img class="loupe-svg" src="../assets/svgs/loupe.svg" />
        <input class="search-bar" placeholder="Search" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import url('../assets/css/GlobalStyles.scss');

.nav-commponent {
  width: 100%;
  padding: 0 100px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  a {
    .logo {
      width: 94px;
    }

    &:hover {
      transform: scale(1.03);
      transition-duration: 0.3s;
    }
  }

  .wrapper {
    width: 20%;
    padding: 0 20px;
    .nav-element {
      padding: 0 20px;
      font-size: 45px;
      line-break: 50px;
      font-family: "Gilroy-Bold", sans-serif;
      text-decoration: none;
      color: black;
      background-color: #c4c4c4;
      border-radius: 15px;
    }

    &:hover {
      transform: scale(1.03);
      transition-duration: 0.3s;
    }
  }

  .nav-left-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cart-block {
      width: auto;
      display: flex;
      align-items: center;
      padding-right: 20px;

      .bag-svg {
        width: 45px;
        height: 45px;
        padding-right: 10px;

        &:hover {
          transform: scale(1.03);
          transition-duration: 0.3s;
          cursor: pointer;
        }
      }

      p {
        font-size: 45px;
        line-break: 50px;
        font-family: "Gilroy-Bold", sans-serif;
      }
    }

    .search-block {
      width: auto;
      display: flex;
      align-items: center;

      .loupe-svg {
        padding-right: 10px;
        width: 45px;
        height: 45px;

        &:hover {
          transform: scale(1.03);
          transition-duration: 0.3s;
          cursor: pointer;
        }
      }

      .search-bar {
        display: block;
        border-radius: 10px;
        border-width: 1px;
        background-color: #ef8c18;
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 10px;
        outline: none;

        &:focus,
        :hover {
          border: none;
        }

        &::placeholder {
          color: black;
          font-size: 24px;
          line-break: 27px;
          font-family: "Gilroy-Bold", sans-serif;
        }
      }
    }
  }
}
</style>