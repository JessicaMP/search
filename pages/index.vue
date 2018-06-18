<template lang="pug">
    v-container(grid-list-xl text-xs-center)
        v-layout(row wrap)
        v-flex(xs10 offset-xs1)
            v-content
                Search
                Table
</template>

<script>
import axios from "axios"
import Search from '../components/Search.vue'
import Table from '../components/Table.vue'

export default {
    components: {
        Search,
        Table
    },
    computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;
      return binding;
    }
  }
}
</script>