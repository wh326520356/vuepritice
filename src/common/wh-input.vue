<template>
    <div id="wh-input">
        <label><input :class="inputClass" :style="{width:width,height: height}" type="text" @onchange="getValue"/></label>
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
                debugger;
                this.text = e.target.value;
            }
        }
    }
</script>

<style scoped>

</style>