<template>
  <div>{{emp.id}} {{ emp.user.firstName }}</div>
</template>

<script>
  export default {
    name: 'EmpItem',
    props: ['emp']
  }
</script>