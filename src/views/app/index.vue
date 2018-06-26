<template>
  <div class="container-application">
    <transition-group>
      <toast position="se" :key='0'></toast>
    </transition-group>

    <router-view></router-view>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import '../../css/style';
</style>
