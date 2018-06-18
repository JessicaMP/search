import axios from 'axios'

export const state = () => ({
    products: [],
    product: ''
})

export const getters = {
    products: state => state.products,
    product: state => state.product
}

export const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    oneProduct(state, product) {
        state.product = product
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        await axios.get(`http://localhost:7000/products`)
            .then((res) => res.data)
            .then(products => {
                commit('setProducts', products)
                console.log(products)
        })
    },
    oneProduct({ commit }, product) {
        commit('oneProduct', product)
    }
}