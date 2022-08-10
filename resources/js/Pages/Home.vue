<template>
    <Header/>
</template>

<script>
import axios from "../../axios/axios-instance";
import Header from "@/components/Header.vue";
export default {
    name: "Home",
    components: {
        Header
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            axios.get('api/get')
            .then(response => {
                console.log(response)
            })
        },
    },
}
</script>

