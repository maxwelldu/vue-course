<template>
  <div id="">
    子分类下的id路由 {{id}}
  </div>
</template>

<script>
  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }) {
      return {id: params.id}
    }
  }
</script>
