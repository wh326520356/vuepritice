<template>
    <div>
        <router-link to="home">123</router-link>
        <router-link to="test">test</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!--<span>123</span>-->
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="less">
</style>