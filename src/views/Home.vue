<template>
  <div class="row">
    <div class="left col-sm-3">
      <ul>
        <li><router-link to="groceries">Groceries</router-link></li>
        <li><router-link to="clothes">Clothes</router-link></li>
      </ul>
    </div>
    <div class="right col-sm-9">
      <router-view/>
    </div>
  </div>    
</template>

<script>
// @ is an alias to /src
// import Groceries from '@/components/Groceries.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

  .row {
    margin: 1rem;
  }

  .left {
    background-color: #2c3e50;
    padding: 1rem;
    text-align: left;
  }

  .left a.router-link-exact-active {
    color: white;
    text-decoration: none;
  }
</style>
