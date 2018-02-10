<template>
  <li style="margin-top: 10px" class="message">{{message}}</li>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped>
.message {
  color: red;
}
</style>
