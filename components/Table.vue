<template lang="pug">
    v-data-table.elevation-1.grey.darken-3.white--text(:headers="headers" :items="products")
        v-progress-linear(:indeterminate="true")
        template(slot="headerCell" slot-scope="props")
            v-tooltip(bottom data-app="true")
                span(slot="activator") {{ props.header.text }}
                span {{ props.header.text }}
        template(slot="items" slot-scope="props")
            td.text-xs-left {{ props.item._id }}
            td.upperCase.text-xs-left {{ props.item.name }}
            td.text-xs-left $ {{ props.item.price }}
</template>
<script>
    export default {
        data() {
            return {
                headers: [
                    {
                    text: 'Id',
                    align: 'left',
                    sortable: false,
                    value: 'id'
                    },
                    { text: 'Name', value: 'name'},
                    { text: 'Price', value: 'price'}
                ]
            }
        },
        computed: {
            products() {
                return this.$store.state.products
            }
        }
    }
</script>
<style lang="sass">
    .upperCase 
        text-transform: uppercase
</style>