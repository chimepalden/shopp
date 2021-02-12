<template>
   <div class="card border-0">
      <div class="card-header">Groceries</div>
      <div class="card-body">
            <ul v-bind:class="{'isComplete':item.complete}" 
                  v-for="item in grocerylist" :key="item.id">
                  {{item.title}}
         </ul>
      </div>
   </div>   
</template>

<script>
export default {
   name: 'Groceries',
   components: {},
   data() {
      return {
         grocerylist: [
            { id: 1, title: "Eggs", completed: false},
            { id: 2,title: "Milk", completed: true},
            { id: 3,title: "Tomatos", completed: false},
            { id: 4,title: "Bread",completed: false}]
      }
   }
}
</script>

<style>

.isComplete {
   text-decoration: line-through;
}
</style>