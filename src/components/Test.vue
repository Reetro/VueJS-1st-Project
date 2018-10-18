<template>
  <div class = "test">
    <input type="text" v-model="title"><br />
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Plumby</p>
    <ul>
      <li v-for="Item in items">{{Item.title}}</li>
    </ul>
    <button v-on:click="greet">Wooh</button>
  </div>
</template>

<script>
export default {
name: 'test',
data () {
  return {
  title: 'Okaisfunhouse.com',
  user: {
    firstName: 'Okai: wooh 1st website',
    },
  showName: true,
  items: [
    {title: 'Item to buy Tardis'},
    {title: 'Item to buy Sonic Screwdriver'},
    {title: 'Item to buy Fez'}
      ]
    }
  },
  methods: {
    greet: function(){
      alert('wooh stop pushing my buttons bro');
    }
  }
}
</script>

<style scoped>

</style>
