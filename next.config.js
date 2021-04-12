const debug = process.env.NODE_ENV !== 'production'
const name = 'reactNext'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}