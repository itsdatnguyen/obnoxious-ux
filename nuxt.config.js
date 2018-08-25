const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "8080"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  head: {
    title: "tt1",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Quicksand"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        crossorigin: "anomymous",
        integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: ["~/sass/index.sass"],
  build: {
    extend (config, ctx) {
      // remove .svg file handling away from file-loader and let vue-svg-loader handle it.
      const urlLoaderIndex = config.module.rules.findIndex(r => String(r.test) === String(/\.(png|jpe?g|gif|svg)$/))
      if (urlLoaderIndex !== -1) {
        config.module.rules[urlLoaderIndex].test = /\.(png|jpe?g|gif)$/
      }
      else {        
        console.error('vue-svg-loader is not the default loader for svgs')
      }

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [
              {removeDoctype: true},
              {removeComments: true}
            ]
          }
        }
      });
    },
  },
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {}
}
