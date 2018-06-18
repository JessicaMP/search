module.exports = {
    head: {
        title: 'Searching......',
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
          ]
    },
    plugins: ['~/plugins/vuetify.js'],
    build: {
        vendor: [
            'vuetify'
        ],
        extend(config, ctx) {
        }
    }
}
