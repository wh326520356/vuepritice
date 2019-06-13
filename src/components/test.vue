<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <!--<div v-if="showNum">123</div>
        <div v-else="showNum">456</div>
        <div v-for="(data,index) in names" :key="index">{{data.label}}{{data.value}}</div>
        <br/>
        <br/> <br/>

        <div v-for="(data,index) in names" :key="index">
            <div v-for="(item,key,index2) in data" :key="index2">value:{{item}}  key:{{key}}</div>
        </div>
        <div>
            <input :value="inputValue" @input="getValue"/>
        </div>
        <div v-html="htmlText"></div>
        <div v-text="htmlText"></div>
        <div v-for="(data,index) in names" v-if="showNum">{{data}}</div>
        <button @click="directPage">跳转</button>
        <div id="exapmle"></div>
        <input v-model="inputValue">
        <div>{{inputValue}}</div>
        <test2 :name="test2Name" @chuanzhi="chuanzhi">
            <template slot="divName">

            </template>
        </test2>
        <div>###############</div>
        <component :is="componentData">
            <template slot="divName">jllj;</template>
        </component>
        <div :style="{display: display}">dsjfa;sfja;ldsjf</div>
        <div :class="styleClass">1234</div>
        <div>count: {{count}}</div>
        <div>countSum: {{countSum}}</div>
        <button @click="changeCount">count变化</button>-->
        <div>{{$store.state.count}}</div>
        <div>{{$store.getters.countSum}}</div>
        <button @click="changeStore">button</button>
    </div>
</template>

<script>
    import test2 from "./test2.vue"
    export default {
        name: "",
        components: {
            test2
        },
        data() {
            return {
                count: 1,
                test2Name: `aaaaaaaaaaaaa`,
                styleClass: `style-class`,
                display: `none`,
                componentData: `test2`,
                showNum: false,
                names: [
                    {label: "test1",value: "ttt1"},
                    {label: "test2",value: "ttt2"},
                    {label: "test2",value: "ttt3"},
                ],
                inputValue: `123`,
                htmlText: `<span>uuuuu</span>`
            }
        },
        beforeCreate() {
            let a = document.getElementById("exapmle");
        },
        created() {
            let a = document.getElementById("exapmle");
        },
        beforeMount() {
            let a = document.getElementById("exapmle");
        },
        mounted() {
            let a = document.getElementById("exapmle");
        },
        beforeUpdate() {
        },
        updated(){
        },
        beforeDestroy() {
        },
        destroyed() {
        },
        methods: {
            changeStore: function () {
              /*this.$store.commit("increment");*/
                this.$store.dispatch("showCount")
            },
            changeCount: function () {
              this.count++;
            },
            chuanzhi: function (val) {
              debugger;
            },
            directPage: function () {
              this.$router.push({path: `home`,params: {id: 1}});
              this.$route.params.id
              let a = this.$router;
              debugger;
            },
            getValue: function(e){
                debugger;
                console.log(e.target.value);
                this.inputValue = e.target.value;
            }
        },
        watch:{
            inputValue: function (newValue,oldValue){
                debugger
                console.log(newValue);
                console.log(oldValue);
            }
        },
        computed:{
            countSum: function () {
                return this.count+1;
            }
        }
    }
</script>

<style scoped lang="less">
    .style-class{
        display: block
    }
</style>