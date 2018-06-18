<template lang="pug">
    // v-flex
    //     p hello
    //     ul(v-for="product in products")
    //         li {{ product.name }}
    //             span {{ product.price }}
    v-data-table.elevation-1(hide-actions :headers="headers" :items="products")
        template(v-for="product in products")
            td {{ product._id }}
            td.text-xs-right {{ product.name }}
            td.text-xs-right {{ product.price }}

</template>

<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Id',
                    align: 'left',
                },
                { text: 'Product', value: 'name'},
                { text: 'Price', value: '$$'}
            ]
        }
    },
    computed: {
        products() {
            return this.$store.getters.products
            console.log(products)
        }
    }
}
</script>