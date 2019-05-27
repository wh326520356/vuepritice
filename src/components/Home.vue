<template>
    <div class="home">
        <span>123</span>
        <Button>点击</Button>
    </div>
</template>

<script>
    import Button from "../common/wh-button.vue"
    export default {
        name: "Home",
        components: {
            Button
        }
    }
</script>

<style lang="less">
.home{
    width: 100px;
    height: 100px;
   /* background-color: #000000;*/
    color: #ffffff;
    background-image: url("../style/image/dog.jpg");
    background-size: 100% 100%;
    span{
        color: yellow;
    }
}
</style>