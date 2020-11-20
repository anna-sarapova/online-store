<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    right: 0;
    left: 0;
    background-color: #C4C4C4;
  }

  @font-face {
    font-family: "Gilroy-Black";
    src: local("Gilroy-Black"),
    url(./assets/fonts/Gilroy-Black.ttf) format("truetype");
  }

  @font-face {
    font-family: "Gilroy-Bold";
    src: local("Gilroy-Bold"),
    url(./assets/fonts/Gilroy-Bold.ttf) format("truetype");
  }

  @font-face {
    font-family: "Gilroy-BoldItalic";
    src: local("Gilroy-BoldItalic"),
    url(./assets/fonts/Gilroy-BoldItalic.ttf) format("truetype");
  }

  @font-face {
    font-family: "Gilroy-ExtraBold";
    src: local("Gilroy-ExtraBold"),
    url(./assets/fonts/Gilroy-ExtraBold.otf) format("truetype");
  }

  @font-face {
    font-family: "Gilroy-Light";
    src: local("Gilroy-Light"),
    url(./assets/fonts/Gilroy-Light.ttf) format("truetype");
  }

  @font-face {
    font-family: "Gilroy-Medium";
    src: local("Gilroy-Medium"),
    url(./assets/fonts/Gilroy-Medium.ttf) format("truetype");
  }

  @font-face {
    font-family: "Gilroy-Regular";
    src: local("Gilroy-Regular"),
    url(./assets/fonts/Gilroy-Regular.ttf);
  }

  @font-face {
    font-family: "Gilroy-SemiBold";
    src: local("Gilroy-SemiBold"),
    url(./assets/fonts/Gilroy-SemiBold.ttf) format("truetype");
  }
</style>
