<template>
  <div class = "test">
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    </div>
</template>

<script>
export default {
name: 'test',
data () {
  return {
  title: 'Adapose.com',
  user: {
    firstName: 'Okai: wooh 1st website',
    },
  showName: true
    }
  }
}
</script>

<style scoped>

</style>
