<template>
    <div id="wh-input">
        <label>
            <input @input="getValue" :class="inputClass" :style="{width:width,height: height}" type="text" @onchange="getValue"/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Input",
        props: {
            width: {
                type: String,
                default: `80px`
            },
            height: {
                type: String,
                default: `30px`
            },
            inputClass: {
                type: String,
                default: ``
            }
        },
        data() {
            return {
                text: ``
            }
        },
        methods: {
            getValue: function (e) {
                this.$emit("input",e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>