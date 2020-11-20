<template>
    <div class="main-section">
        <div class="main-image">
            <p>This online store will help you 
                find what you want.
            </p>

            <button class="leanr-more">Learn more</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainSection"
}
</script>

<style lang="scss" scoped>

.main-section {
    width: 100%;
    max-width: 1250px;
    height: 500px;
    background-color: #FFFFFF;
    margin: 0 auto;
    display: flex;
    justify-items: center;

    .main-image {
        font-size: 45px;
        line-break: 50px;
        font-family: "Gilroy-Bold", sans-serif;
        align-self: center;
        justify-self: center;
        width: 90%;
        background-color: #C4C4C4;
    }
}

</style>