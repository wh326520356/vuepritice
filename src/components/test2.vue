<template>
    <div>
        <div>123</div>
        <div>{{name}}</div>
        <div>
            <slot name="divName"></slot>
        </div>
        <button @click="chuanzhi">传值</button>
    </div>
</template>

<script>
    export default {
        name: "test2",
        data() {
          return {
              test2NameValue: `ppppppp`
          }
        },
        props: {
            name: {
                type: [String,Number],
                defaultValue: `王涵`
            }
        },
        methods: {
            chuanzhi: function () {
                this.$emit("chuanzhi",this.test2NameValue);
            }
        }
    }
</script>

<style scoped>

</style>