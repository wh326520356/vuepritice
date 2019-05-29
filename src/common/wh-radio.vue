<template>
    <div class="wh-radio">
        <label>
            <i class="wh-radio-style">
                <input @change="getValue" :value="value" :name="name" type="radio"/>
            </i>
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Radio",
        props: {
            name: {
                type: String,
                default: ``
            },
            value: {
                type: Object,
                default: ``
            }
        },
        data() {
            return {
                radioValue: ``,
                whRadio: `wh-radio-style`,
                checked: false
            }
        },
        computed: {

        },
        watch: {
        },
        methods: {
            getValue: function (e){
                this.checked = e.target.checked;
                debugger;
            }
        }
    }
</script>

<style scoped>

</style>