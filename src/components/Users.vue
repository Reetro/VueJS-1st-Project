<template>
  <div class="users" id="content">
    <notifications group="userInfo" width="350" />
    <img src="static/adapose.jpg"/>
    <h1>Users</h1>
    <div class="container">
      <div class="toatalNumberBox"><h2>Toatal Number of users</h2>
        <h2 class="amountOfUsersText">{{amountOfUsers}}</h2>
      </div>
    <div class="percentContactedBox">
      <h2 class="peopleContactedHeader">Percent contacted</h2>
      <h2 class="percentContactedText">{{percentContacted}}%<progress-bar size="large" :val="percentContacted"></progress-bar></h2>
    </div>
      <div class="acceptedContactsBox">
      <h2 class = "acceptedContacts">Percent accepted</h2>
      <h2 class="percentOfAcceptedUsersText">{{percentOfAcceptedUsers}}%<progress-bar size="large" :val="percentOfAcceptedUsers"></progress-bar></h2>
    </div>
    </div>
        <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Enter Name" id="nameBox">
        <br/>
        <input type="text" v-model="newUser.email" placeholder="Enter email" id="emailBox">
        <br/>
        <input type="submit" value="Submit" id="submitButton">
      </form>
      <ul id="contactlist">
        <li v-for="user in users">
          <input type="checkbox" class="toggle" v-model="user.contacted" v-on:change="toggleAcceptedUserContacted(user)">
          <span :class="{contacted: user.contacted}" id="usersinlist">
            <span v-on:click="toggleUserContacted(user), toggleAcceptedUserContacted(user)">{{user.name}}: {{user.email}}</span> <button class="xButton" v-on:click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import User from '../models/User.js'
import ProgressBar from 'vue-simple-progress'

export default {
  name: 'users',
  data () {
    return {
      newUser: {},
      users: [],
    }
  },
  methods: {
    addUser: function (e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false,
        acceptedContactes: false
      });
      e.preventDefault();
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    toggleUserContacted: function (user) {
      this.setUserContacted(user, !user.contacted)
    },
    toggleAcceptedUserContacted: function (user) {
      if (this.didUserAcceptContact(user)) {
        this.setUserAcceptedContacted(user, !user.acceptedContactes)
      }
    },
    setUserContacted: function (user, contacted) {
      this.users[this.users.indexOf(user)].contacted = contacted
    },
    setUserAcceptedContacted: function (user, acceptedContactes) {
      this.users[this.users.indexOf(user)].acceptedContactes = acceptedContactes
    },
    didUserAcceptContact: function (user) {
        let chose = Math.round(Math.random())
        let didAccept = false
        switch (chose) {
        case 0:
        chose = 0
        if (user.contacted) {
          this.$notify({
             group: 'userInfo',
             title: 'Email    ' + (user.email),
             text:  'User     ' + (user.name) + '   didnt accepted contact',
             duration: 4000
           })
           didAccept = false
        }
        break
        case 1:
          if (user.contacted) {
            this.$notify({
               group: 'userInfo',
               title: 'Email    ' + (user.email),
               text:  'User     ' + (user.name) + '  did accepted contact',
               duration: 4000
             })
             didAccept = true
          }
          break
      }
      return didAccept
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        for (let user of response.data) {
          this.users.push(new User(user.name, user.email))
        }
      });
  },
  computed: {
    amountOfUsers: function () {
      return this.users.length
    },
    amountContacted: function () {
      let totalContacted = 0
      for (let user of this.users) {
        if (user.contacted) {
          totalContacted ++
        }
      }
      return totalContacted
    },
    percentContacted: function () {
      return Math.floor((this.amountContacted / this.amountOfUsers) * 100)
    },
    percentOfAcceptedUsers: function () {
      let amountOfAcceptedUsers = 0
      for (let user of this.users) {
        if (user.acceptedContactes) {
          amountOfAcceptedUsers ++
        }
      }
      return Math.floor((amountOfAcceptedUsers / this.amountOfUsers) * 100)
    }
  },
  components: {
   ProgressBar
  }
}
</script>

<style scoped>

  .container{
    width: 700px;
    height: 300px;
    box-sizing: border-box;
    text-align: center;
    display: inline-block;
    margin: 0 auto;
    padding: 2px;

  }

  .acceptedContactsBox{
    border: 2px solid black;
    box-sizing: border-box;
    box-shadow: .5px .5px;
    width: 230px;
    height: 140px;
    text-align: center;
    float: right;
  }

  .percentContactedBox{
    border: 2px solid black;
    box-sizing: border-box;
    box-shadow: .5px .5px;
    width: 230px;
    height: 140px;
    text-align: center;
    float: left;
  }

  .toatalNumberBox{
    border: 2px solid black;
    box-sizing: border-box;
    box-shadow: .5px .5px;
    width: 230px;
    height: 140px;
    text-align: center;
    display: inline-block;
  }

  .peopleContactedHeader{
    text-align: center;
  }

  .amountOfUsersText{
    text-align: center;
  }

  .percentContactedText{
    text-align: center;
  }

  .contacted{
  text-decoration: line-through;
  }

  .xButton{
    background-color: white;
    border: 1px;
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
      margin: auto;
    }

    #content{
      max-width: 500px;
      margin:auto;
      text-align: center;
    }

</style>
