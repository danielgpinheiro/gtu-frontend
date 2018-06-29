<template>
  <div class="loading-dialog" :class="{ 'opened': isOpen }">
    <span class="spin"></span>
    <p>{{ message }}</p>
  </div>
</template>

<script src="./scripts.js"></script>
