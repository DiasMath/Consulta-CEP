const PROXY_CONFIG = [ 
  {
    context: [ '/api' ],
    target: `https://viacep.com.br/ws/json/`,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        "^/": ""
    }
  }
]

module.exports = PROXY_CONFIG;