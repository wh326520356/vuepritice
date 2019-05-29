<template>
    <div class="wh-radio">
        <label>
            <i :class="model==value?'wh-radio-style checked':'wh-radio-style'">
                <input @change="getValue" :value="value" :name="name" type="radio"/>
            </i>
            <span><slot></slot></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Radio",
        model: {
          prop: 'model'
        },
        props: {
            name: {
                type: [String,Number],
                default: ``
            },
            value: {
                type: [String,Number],
                default: ``
            },
            model: {
                type: [String,Number],
                require: true
            }
        },
        data() {
            return {
                radioValue: ``,
                whRadio: `wh-radio-style`,
                checked: false,
                currentValue: ``
            }
        },
        computed: {

        },
        watch: {
        },
        methods: {
            getValue: function (e){
                this.$emit(`change`,e.target.value);
            }
        }
    }
</script>

<style scoped>

</style>