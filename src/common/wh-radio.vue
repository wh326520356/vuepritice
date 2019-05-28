<template>
    <div class="wh-radio">
        <label><input v-model="radioValue" :name="name" type="radio"/><span></span><slot></slot></label>
    </div>
</template>

<script>
    export default {
        name: "Radio",
        props: {
            name: {
                type: String,
                default: ``
            }
        },
        data() {
            return {

            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>