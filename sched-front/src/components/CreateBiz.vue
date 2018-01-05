<template>
  <div>
    <div class="flex flex-column mt3">
      <label for="name">Name</label>
        <input
            class="mb2"
            v-model="name"
            type="text"
            id="name">
    </div>
    <button @click="createBiz()">Submit</button>
  </div>
</template>

<script>
    import { CREATE_BIZ_MUTATION } from '../constants/graphql'

    export default {
    name: 'CreateBiz',
    data () {
        return {
            name: ''
        }
    },
    methods: {
        createBiz () {
            const { name } = this.$data
            this.$apollo.mutate({
                mutation: CREATE_BIZ_MUTATION,
                variables: {
                    name
                }
            })
}
    }
    }
</script>