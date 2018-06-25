<template lang="pug">
    v-flex
        h1.center Search
        v-toolbar(color="purple" dark tabs)
            v-text-field(label="Search" solo-inverted v-model="keyword" @keyup.enter="search" @keyup="search")      
            v-btn(flat icon color="white" @click="search")
                v-icon search
</template>

<script>
export default {
    data() {
        return {
            keyword: null
        }
    },
    methods: {
        search() {
            this.$store.dispatch("search", this.keyword)
        }
    }
}
</script>