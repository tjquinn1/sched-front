<template>
  <div>
    <!-- 1 -->
    <h4 v-if="loading">Loading...</h4>
    <h1>Emp List</h1>
    <emp-item
        v-for="emp in emps"
        :key="emp.id"
        :emp="emp">
    </emp-item>
  </div>
</template>

<script>
import { ALL_EMPS_QUERY } from '../constants/graphql'
import EmpItem from './EmpItem'

export default {
    name: 'EmpList',
    data () {
        return {
            emps: [],
            loading: 0
        }
    },
    components: {
        EmpItem
    },
    // 4
    apollo: {
        emps: {
            query: ALL_EMPS_QUERY
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
