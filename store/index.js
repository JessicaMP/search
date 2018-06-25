import axios from 'axios'

export const state = () => ({
    products: []
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        await axios.get(`http://localhost:7000/products`)
            .then((res) => res.data)
            .then(products => {
                commit('setProducts', products)
            })
    },
    search({commit}, keyword) {
        axios.get(`http://localhost:7000/products?keyword=${keyword}`)
            .then((res) => res.data)
            .then(products => {
                commit('setProducts', products)
            })
    }
}