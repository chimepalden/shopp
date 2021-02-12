<template>
  <div class="navig">
    <div id="logo">
      <router-link to="/">Shopp</router-link>
    </div>
    <div id="navlinks">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <div class="body">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navig {
  margin: 1rem;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  background-color: #42b983;
}

.navig a {
  font-weight: bold;
  color: #2c3e50;

}

.navig a.router-link-exact-active {
  color: white;
  text-decoration: none;
}

</style>
