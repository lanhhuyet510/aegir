'use strict'
const EPILOG = `
This command outputs two bundles, one in development mode (index.js) and another in production mode (index.min.js) plus respective source-maps, files are written to ./dist folder.
Supports options forwarding with '--' for more info check https://webpack.js.org/api/cli/
`
module.exports = {
  command: 'build',
  desc: 'Builds browser bundles with Webpack.',
  builder: (yargs) => {
    yargs
      .epilog(EPILOG)
      .options({
        analyze: {
          alias: 'a',
          describe: 'Analyze mode. Opens webpack-bundle-analyzer and write stats to disk',
          default: false
        }
      })
  },
  handler (argv) {
    const build = require('../src/build')
    return build(argv)
  }
}
