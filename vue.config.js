const { defineConfig } = require('@vue/cli-service');
// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

// module.exports = {
//   configureWebpack: () => {
//     if (process.env.NODE_ENV !== 'production') return;
//     return {
//       plugins: [
//         new PrerenderSPAPlugin(
//             // Absolute path to compiled SPA
//             path.resolve(__dirname, 'dist'),
//             // List of routes to prerender
//             [ '/'],
//             {
//               // options
//             }
//         ),
//       ]
//     }
//   },
//
//   transpileDependencies: [
//     'vuetify'
//   ]
// }
