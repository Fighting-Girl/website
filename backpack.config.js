module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'
    config.node={
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
    console.info(config)
    return config
  }
}
