<template>
    <div id="wh-button">
        <button @click="buttonClick" :disabled="disabled" :class="buttonClass">
            <span><slot></slot></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            buttonClass: {
                type: String,
                default: `defaultButton`
            }
        },
        methods: {
            buttonClick: function (target) {
                this.$emit(`click`,target);
            }
        }
    }
</script>

<style scoped>
</style>