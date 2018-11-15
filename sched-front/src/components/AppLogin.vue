<template>
  <div>
    <h4 class='mv3'>{{login ? 'Login' : 'Sign Up'}}</h4>
    <div class='flex flex-column'>
      <input
        v-show="!login"
        v-model="name"
        type="text"
        placeholder="Your name">
      <input
        v-model="email"
        type="text"
        placeholder="Your email address">
      <input
        v-model="password"
        type="password"
        placeholder="Password">
    </div>
    <div class='flex mt3'>
      
      <input type="button" @click="confirm()" value="Button1">
      <div
        class='pointer button'
        @click="login = !login">
        {{login ? 'need to create an account?' : 'already have an account?'}}
      </div>
    </div>
  </div>
</template>

<script>
  import { DJANGO_USER_ID, DJANGO_AUTH_TOKEN } from '../constants/settings'
  import { CREATE_USER_MUTATION, LOGIN_USER_MUTATION } from '../constants/graphql'

  export default {
    name: 'AppLogin',
    data () {
      return {
        email: '',
        login: true,
        name: '',
        password: ''
      }
    },
    methods: {
      confirm () {
        const { name, email, password } = this.$data
        if (this.login) {
            this.$apollo.mutate({
            mutation: LOGIN_USER_MUTATION,
            variables: {
                email,
                password
            }
            }).then((result) => {
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this.saveUserData(id, token)
            }).catch((error) => {
            alert(error)
            })
        } else {
            this.$apollo.mutate({
            mutation: CREATE_USER_MUTATION,
            variables: {
                name,
                email,
                password
            }
            }).then((result) => {
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this.saveUserData(id, token)
            }).catch((error) => {
            alert(error)
            })
        }
        this.$router.push({path: '/'})
        },
      saveUserData (id, token) {
        localStorage.setItem(DJANGO_USER_ID, id)
        localStorage.setItem(DJANGO_AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(DJANGO_USER_ID)
      }
    }
  }
</script>