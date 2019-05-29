<template>
    <div class="home">
        <span>123</span>
        <Button :buttonClass="homeButton">点击</Button>
        <Radio name="num" v-model="radioValue" :value="1" @change="getValue">1</Radio>
        <Radio name="num" v-model="radioValue" :value="2" @change="getValue">2</Radio>
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
                homeButton: `home-button`,
                radioValue: ``
            }
        },
        methods: {
            getValue: function (value) {
                this.radioValue = value;
            }
        }
    }
</script>

<style lang="less">
</style>