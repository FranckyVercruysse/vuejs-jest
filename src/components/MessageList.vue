<template>
  <ul>
      <message :message="message" v-for="message in messages" :key="message" />
  </ul>
</template>

<script>
import Message from './Message'
export default {
  name: 'list',
  props: ['messages'],
  components: {
    Message
  }
}
</script>
