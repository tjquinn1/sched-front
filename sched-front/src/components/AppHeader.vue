<template>
  <div class="flex pa1 justify-between nowrap orange">
    <div class="flex flex-fixed black">
      <div class="fw7 mr1">Hacker News</div>
      <router-link to="/" class="ml1 no-underline black">new</router-link>
      <div class="flex" v-if="userId">
        <div class="ml1">|</div>
              <router-link to="/createemp" class="ml1 no-underline black">Create Emp</router-link>
      <div class="ml1">|</div>
      <router-link to="/createbiz" class="ml1 no-underline black">Create Biz</router-link>
      </div>
    </div>
    <div class="flex flex-fixed">
      <div v-if="userId" class="ml1 pointer black" @click="logout()">logout</div>
      <router-link v-else to="/login" class="ml1 no-underline black">login</router-link>
    </div>
  </div>
</template>

<script>
  import { DJANGO_USER_ID, DJANGO_AUTH_TOKEN } from '../constants/settings'

  export default {
    name: 'AppHeader',
    computed: {
      userId () {
        return this.$root.$data.userId
      }
    },
    methods: {
      logout () {
        localStorage.removeItem(DJANGO_USER_ID)
        localStorage.removeItem(DJANGO_AUTH_TOKEN)
        this.$root.$data.userId = localStorage.getItem(DJANGO_USER_ID)
      }
    }
  }
</script>