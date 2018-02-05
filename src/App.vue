<template>
  <div id="app">
    <message-list :messages="messages" />
  </div>
</template>

<script>
import MessageList from '@/components/MessageList'
export default {
  name: 'App',
  data: () => ({messages: ['Hey John', 'Howdy Paco']}),
  components: {
    'message-list': MessageList
  }
}
</script>
