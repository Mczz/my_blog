<template>

    <a :href="taginfo.href" >{{taginfo.tagname}}</a>
</template>

<script>
export default {
    props:['taginfo']
}
</script>

<style scoped>
    a {
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
    }
    a:hover {
        border-radius: 0;
        text-shadow: 2px 2px 5px #555555;

    }
</style>