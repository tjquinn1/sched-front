<template>
  <div>
    <div class="flex flex-column mt3">
        <label for="user">User</label>
        <input
            class="mb2"
            v-model="user"
            type="number"
            id="user">

        <label for="biz">Biz</label>
        <input
            class="mb2"
            v-model="biz"
            type="number"
            id="biz">

        <label for="sunday-start">Sunday Start</label>
        <input
            class="mb2"
            v-model="sunday_start"
            type="number"
            id="sunday-start">

        <label for="sunday-end">Sunday End</label>
        <input
            class="mb2"
            v-model="sunday_end"
            type="number"
            id="sunday-end">

        <label for="monday-start">Monday Start</label>
        <input
            class="mb2"
            v-model="monday_start"
            type="number"
            id="monday-start">

        <label for="monday-end">Monday End</label>
        <input
            class="mb2"
            v-model="monday_end"
            type="number"
            id="monday-end">
        <label for="tuesday-start">Tuesday Start</label>
        <input
            class="mb2"
            v-model="tuesday_start"
            type="number"
            id="tuesday-start">

        <label for="tuesday-end">Tuesday End</label>
        <input
            class="mb2"
            v-model="tuesday_end"
            type="number"
            id="tuesday-end">

        <label for="wednesday-start">Wednesday Start</label>
        <input
            class="mb2"
            v-model="wednesday_start"
            type="number"
            id="wednesday-start">

        <label for="wednesday-end">Wednesday End</label>
        <input
            class="mb2"
            v-model="wednesday_end"
            type="number"
            id="wednesday-end">

        <label for="thursday-start">Thursday Start</label>
        <input
            class="mb2"
            v-model="thursday_start"
            type="number"
            id="thursday-start">

        <label for="thursday-end">Thursday End</label>
        <input
            class="mb2"
            v-model="thursday_end"
            type="number"
            id="thursday-end">

        <label for="friday-start">Friday Start</label>
        <input
            class="mb2"
            v-model="friday_start"
            type="number"
            id="friday-start">

        <label for="friday-end">Friday End</label>
        <input
            class="mb2"
            v-model="friday_end"
            type="number"
            id="friday-end">

        <label for="saturday-end">Saturday Start</label>
        <input
            class="mb2"
            v-model="saturday_start"
            type="number"
            id="saturday-end">

        <label for="saturday-end">Saturday End</label>
        <input
            class="mb2"
            v-model="saturday_end"
            type="number"
            id="saturday-end">
        
    </div>
    <button @click="createEmp()">Submit</button>
  </div>
</template>

<script>
    import { CREATE_EMP_MUTATION } from '../constants/graphql'

    export default {
    name: 'CreateEmp',
    data () {
        return {
            user: 0,
            biz: 0,
            sunday_start: 0,
            sunday_end: 0,
            monday_start: 0,
            monday_end: 0,
            tuesday_start: 0,
            tuesday_end: 0,
            wednesday_start: 0,
            wednesday_end: 0,
            thursday_start: 0,
            thursday_end: 0,
            friday_start: 0,
            friday_end: 0,
            saturday_start: 0,
            saturday_end: 0
        }
    },
    methods: {
        createEmp () {
            const { user,
                    biz,
                    sunday_start,
                    sunday_end,
                    monday_start,
                    monday_end,
                    tuesday_start,
                    tuesday_end,
                    wednesday_start,
                    wednesday_end,
                    thursday_start,
                    thursday_end,
                    friday_start,
                    friday_end,
                    saturday_start,
                    saturday_end } = this.$data
            this.$apollo.mutate({
                mutation: CREATE_EMP_MUTATION,
                variables: {
                    user,
                    biz,
                    sunday_start,
                    sunday_end,
                    monday_start,
                    monday_end,
                    tuesday_start,
                    tuesday_end,
                    wednesday_start,
                    wednesday_end,
                    thursday_start,
                    thursday_end,
                    friday_start,
                    friday_end,
                    saturday_start,
                    saturday_end
                }
            })
}
    }
    }
</script>