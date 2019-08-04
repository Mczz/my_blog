<template>

    <p @click="openTags(taginfo.id)">{{taginfo.tagname}}</p>
</template>

<script>
export default {
    props:['taginfo'],
    methods:{
        openTags(id){
            this.$router.push({ name: "tagblog",params:{
                tagid:1
            } })
        }
    }
}
</script>

<style scoped>
    p {
    line-height: 24px;
    height: 24px;
    display: inline-block;
    background: #999;
    font-size: 14px;
    padding: 3px 11px;
    margin: 10px 10px 0 0;
    border-radius: 8px;
    transition: all 0.5s;
    color: #FFF;
    text-decoration: none;
    cursor: pointer;
    }
    p:hover {
        border-radius: 0;
        text-shadow: 2px 2px 5px #555555;

    }
</style>