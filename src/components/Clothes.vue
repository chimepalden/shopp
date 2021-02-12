<template>
    <div class="card border-0">
        <div class="card-header">Clothes</div>
        <div class="card-body">
            <ul v-bind:key="item.id" v-for="item in clothesList">
                <li>{{item.title}}</li>
            </ul>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Clothes',
    components: {},
    data() {
        return {
            clothesList: [
                {id:1, title:"Jacket", completed:false},
                {id:2, title:"T-shirt", completed:false},
                {id:3, title:"sweat-pants", completed:false},
                {id:4, title:"hoodie", completed:false},
                {id:5, title:"socks", completed:false}
            ]
        }
    }
}
</script>