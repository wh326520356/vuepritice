<template>
    <button :disabled="disabled" :class="buttonClass">
        <span><slot></slot></span>
    </button>
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
        }
    }
</script>

<style scoped>
</style>