<template>
  <div id="navbar">
      <a href="http://">Link 1</a>
      <a href="http://">Link 2</a>
      <a href="http://">Link 3</a>
      <a href="http://">Link 4</a>
  </div>
</template>

<script>
export default {
  data () {
      return {
      }
  }
}
</script>

<style scoped>
#navbar {
    list-style-type: none;
    background-color: rgb(11, 177, 253);
    margin: 0;
    overflow: hidden;
}

#navbar a {
    float: left;
    color: black;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    padding: 15px 15px;
    font-size: 16px;
}

#navbar a:hover {
    background-color: rgb(21, 139, 194);
}
</style>
