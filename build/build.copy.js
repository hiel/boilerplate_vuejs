'use strict'

const fse = require('fs-extra')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const PACKAGE = require('../package.json')

const spinner = ora('[S3] copy for production...')
spinner.start()

// 업로드 폴더 삭제
const uploadPath = './upload_prod'
try {
  spinner.stop()
  rm.sync(uploadPath)
  // 업로드 폴더 복사
  fse.copySync('./dist_s3/' + PACKAGE.version, uploadPath)

  console.log(chalk.cyan('  [S3]  Copy complete. >> production\n'))

} catch (err) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors : true,
    modules : false,
    children : false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks : false,
    chunkModules : false,
  }) + '\n\n')
  console.log(chalk.red('  Copy failed with errors.\n'))
  process.exit(1)
}
