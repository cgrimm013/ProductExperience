<template>
  <nav>
    <h1 class="center">My Semester Experience</h1>
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/weeks/1-3">Weeks1-3</router-link></li>
      <li><router-link to="/weeks/4-6">Weeks4-6</router-link></li>
      <li><router-link to="/weeks/7-10">Weeks7-10</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#menu{
  text-align: center;
  width: 70%;
  margin: auto;
}

.clear {
    float: clear;
}
nav {
  text-align: center;
    display: grid;
}
ul {
    list-style-type:none;
    margin:0;
    padding:0;
}

/*Create a horizontal list with spacing*/
li {
    display:inline-block;
    text-align: center;
    margin-right: 1px;
}
/*Style for menu links*/
li a {
    display:block;
    margin-right: 20px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #621EA0;
}
/*Active color*/
li a.active {
}
/*Hover state for top level links*/
li:hover a {
  color: #310f50;
}
</style>
