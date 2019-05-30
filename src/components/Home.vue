<template>
    <div class="home">
        <span>123</span>
        <Button :buttonClass="homeButton">点击</Button>
        <Radio name="num" v-model="radioValue" :value="1" @change="getValue">1</Radio>
        <Radio name="num" v-model="radioValue" :value="2" @change="getValue">2</Radio>
        <whInput :width="'200px'" @input="getInputValue" :inputClass="inputClass" :height="'50px'"></whInput>
    </div>
</template>

<script>
    import Radio from "../common/wh-radio.vue"
    import Button from "../common/wh-button.vue"
    import whInput from "../common/wh-input.vue"
    export default {
        name: "Home",
        components: {
            Button,
            Radio,
            whInput
        },
        data() {
            return {
                homeButton: `home-button`,
                radioValue: ``,
                inputClass: `inputStyle`
            }
        },
        methods: {
            getValue: function (value) {
                this.radioValue = value;
            },
            getInputValue: function (val) {
                debugger;
            }
        }
    }
</script>

<style lang="less">
</style>