<template>
    <div class="home">
        <span>123</span>
        <Button :buttonClass="homeButton">
            <template slot="buttonName">
                <span>点击</span>
            </template>
        </Button>
        <Radio name="num" v-model="radioValue" :value="1" @change="getValue">1</Radio>
        <Radio name="num" v-model="radioValue" :value="2" @change="getValue">2</Radio>
        <whInput :width="'200px'" @input="getInputValue" :inputClass="inputClass" :height="'50px'"></whInput>
        <div>{{count}}</div><br/>
        <div>{{$store.getters.countSum}}</div>
        <button @click="changeCount">改变</button><br/>
        <div>
            <span>{{data|showData}}</span>
        </div>
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
                inputClass: `inputStyle`,
                data: [
                    { label: `数字`,value: 1 },
                    { label: `数字`,value: 2 },
                    { label: `数字`,value: 3 }
                ]
            }
        },
        methods: {
            getValue: function (value) {
                this.radioValue = value;
            },
            getInputValue: function (val) {
                debugger;
            },
            changeCount: function () {
                this.$store.dispatch("showCount")
            }
        },
        computed: {
            count: function () {
                return this.$store.getters.countSum;
            }
        },
        filters: {
            showData: function(value) {
                for (let i = 0;i<value.length;i++) {
                    if (value[i].value>1) {
                        return value[i].value
                    }
                }
            }
        }
    }
</script>

<style lang="less">
</style>