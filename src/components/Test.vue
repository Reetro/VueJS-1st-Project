<template>
  <div class = "test" id="content">
    <input type="text" v-model="title"><br />
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Plumby</p>
    <ul id="list">
      <li v-for="Item in items">{{Item.title}}</li>
    </ul>
    <button v-on:click="greet">Wooh</button>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"><br />
    <label>First Name:</label><input type="text" v-model="user.firstName"><br />
    <label>Last Name:</label><input type="text" v-model="user.lastName"><br />
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default:'Bleh'
  }
},
data () {
  return {
  title: 'Okaisfunhouse.com',
  user: {
      firstName: 'Okai',
      lastName: 'dookie'
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
    },
    pressKey: function(e){
      console.log(e.target.value);
    },
    enterHit: function(){
      console.log("you hit enter")
    }
  },
  computed: {
    fullName: function(){
      return this.user.firstName+ ' '+this.user.lastName
    }
  }
}
</script>

<style scoped>

#content{
  max-width: 500px;
  margin:auto;
  text-align: center;
}

#list{
  list-style: decimal;
  margin: auto;
  list-style-position: inside;
  padding: 30px 15px;
  text-align: center;
}

</style>
