<template>
  <div class="">
    Users id {{id}}
    <a href="/users">/users</a>
  </div>
</template>

<script>
  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params, env, error }) {
      console.log(params, env, error)
      return { id: params.id }
    }
  }
</script>
