<template>
  <div class="zhuanti">
    <h2 class="zhuanti-title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss">
@import "@/assets/css/zhuanti.scss";
</style>