<template>
  <div>
    <h1>{{message}}</h1>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
    <app-checkbox></app-checkbox>
    <p>Message #{{ $route.params.message_id }}</p>
    <button @click="changeRoute">Go Home</button>
  </div>
</template>

<script>
  import Input from './Input.vue';
  import Checkbox from './Checkbox.vue';
  export default {
    data() {
      return {
        message: 'This is a great message!',
      }
    },
    created() {
      alert(this.$route.params.message_id)
    },
    methods: {
      changeRoute() {
        this.$router.push('/')
      }
    },
    watch: {
      '$route' (to, from){
        alert(to.params.message_id)
      }
    },
    components: {
      'app-input': Input,
      'app-checkbox': Checkbox
    },

  }
</script>

