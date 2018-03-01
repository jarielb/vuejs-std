<template>
  <div>
    <input type="checkbox" v-model="checkbox">
    <p>{{checkbox}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          checkbox: false,
      }
    }
  }
</script>
