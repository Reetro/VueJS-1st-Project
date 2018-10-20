<template>

  <div class="users" id="content">

    <img src="static/adapose.jpg"/>
      <h1>Users</h1>
      <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Enter Name" id="nameBox">
        <br/>
        <input type="text" v-model="newUser.email" placeholder="Enter email" id="emailBox">
        <br/>
        <input type="submit" value="Submit" id="submitButton">
      </form>
      <ul id="contactlist">
        <li v-for="user in users">
          <input type="checkbox" class="toggle" v-model="user.contacted">
          <span :class="{contacted: user.contacted}" id="usersinlist">
            <span v-on:click="nameClicked(user)">{{user.name}}: {{user.email}}</span> <button class="xButton" v-on:click="deleteUser(user)">X</button>
          </span>
        </li>
      </ul>
  </div>

</template>

<script>

export default {
name: 'users',
data () {
  return {
    newUser: {},
    users: []
    }
  },
  methods: {
      addUser: function(e){
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
      },
      deleteUser: function(user){
        this.users.splice(this.users.indexOf(user), 1);
    },
    nameClicked: function(user){
      this.users[this.users.indexOf(user)].contacted = !user.contacted
    }
  },
  created: function(){
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){this.users = response.data});
    }
  }

</script>

<style scoped>

.contacted{
text-decoration: line-through;
}

.xButton{
  background-color: white;
  border: none;
  text-align: center;
  font-size: 25px;
}

.toggle{
  padding: 30px 25px;
}

#contactlist{
  list-style: decimal;
  margin: auto;
  list-style-position: inside;
  padding: 30px 15px;
  text-align: center;
  white-space: nowrap;
  }

  #usersinlist{
    font-size: 20px;
    position: static;
    display: inline-block;
  }

  #nameBox{
    width: 30%;
    padding: 5px 5px;
    margin: auto;
    box-sizing: border-box;
  }

  #emailBox{
    width: 30%;
    padding: 5px 5px;
    margin: auto;
    box-sizing: border-box;
  }

  #submitButton{
    background-color: white;
    border-width: thin;
    font-size: 15px;
    display: inline;
    text-align: center;
    width: 150px;
    height: 40px;
  }

  #content{
    max-width: 500px;
    margin:auto;
    text-align: center;
  }

</style>
