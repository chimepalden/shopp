<template>
  <div class="row">
    <div class="left col-sm-3">
      <ul v-for="title in titleList" :key="title">
        <li>
          <router-link to="viewList" v-on:click="showList(title)">{{title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="right col-sm-9">
      <router-view v-bind:listToShow="tempList"></router-view>
    </div>
  </div>    
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
// import viewList from '@/views/viewList.vue'


export default {
  name: 'Home',
  components: {
    // viewList,
  },
  data() {
    return {
      shopList: [],
      titleList: [],
      tempList: []
    }
  },
  methods: {
    showList(title) {
      this.tempList = this.shopList.filter(list => {
        return list.userId == title
       });
    }   
  },
  // this method, created runs when the component, Home opens.
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=50')
          .then(res => {
            this.shopList = res.data;
            // console.log(this.shopList);

            var allTitles = this.shopList.map(list => {
              return list.userId;
            });
            // console.log(allTitles);

            this.titleList = allTitles.filter((title,index) => {
              return allTitles.indexOf(title) === index;
            });
            // console.log(titleList)

            this.showList(this.titleList[0]);
            console.log(this.tempList);
          })
          .catch(err => console.log(err));  
  },

}
</script>

<style scoped>

  .row {
    margin: 1rem;
  }

  .left {
    background-color: #2c3e50;
    padding-top: 2rem;
    text-align: left;
  }

 /* .left a.router-link-exact-active {
    color: white;
    text-decoration: none;
  }*/
</style>
