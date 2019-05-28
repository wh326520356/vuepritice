<template>
    <div class="home">
        <span>123</span>
        <Button :buttonClass="homeButton">点击</Button>
        <Radio name="num">1</Radio>
        <Radio name="num">2</Radio>
    </div>
</template>

<script>
    import Radio from "../common/wh-radio.vue"
    import Button from "../common/wh-button.vue"
    export default {
        name: "Home",
        components: {
            Button,
            Radio
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