<template>
    <div class="home">
        <span>123</span>
        <Button :buttonClass="homeButton">点击</Button>
    </div>
</template>

<script>
    import Button from "../common/wh-button.vue"
    export default {
        name: "Home",
        components: {
            Button
        },
        data() {
            return {
                homeButton: `home-button`
            }
        },
        methods: {

        }
    }
</script>

<style lang="less">
</style>