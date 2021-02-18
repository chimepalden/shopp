<template>
    <div class="card border-0">
      <div class="card-header">{{listToShow[0].userId}}</div>
      <div class="card-body">
         <div class="form-check d-flex" v-for="item in listToShow" :key="item.id"
                v-bind:class="{'is-complete':item.completed}">
            <input class="form-check-input" type="checkbox" v-on:change="markCompleted(item.id)">
            <label class="form-check-label">
               {{item.title}}
            </label>   
         </div>         
      </div>
   </div>      
</template>

<script>
export default {
    name: "viewList",
    props: ["listToShow"],
    methods: {
        markCompleted(id) {
            let item = this.listToShow.find(item => item.id === id);
            if(item)
                item.completed = !item.completed;
        }
    }
}
</script>

<style scoped>
.is-complete {
    text-decoration: line-through;
}
</style>