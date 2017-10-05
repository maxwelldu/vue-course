<template>
  <div class="hello">
    <div v-for="(item, index) in goodsList" class="goods">
      <div class="img">
        <img :src="item.goods_thumb" alt="">
      </div>
      <div class="desc">
        <i>{{item.price}}</i> <span>{{item.goods_name}}</span>
      </div>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      goodsList: []
    }
  },
  created: function () {
    // 使用axios插件
    this.$http.get('http://h6.duchengjiu.top/shop/api_goods.php?pagesize=12')
    .then((result) => {
      console.log(result)
      this.goodsList = result.data.data
    })
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

.goods {
  float: left;
  width: 200px;
  height: 350px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid red;
}
.goods .img {
  width: 100%;
  height: 200px;
}
.goods .img img{
  width: 100%;
  height: 100%;
}
.goods .desc i{
  color: red;
  font-style: normal;
  padding-right: 10px;
}
</style>
