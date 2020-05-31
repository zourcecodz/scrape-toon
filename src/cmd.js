const vorpal = require('vorpal')()
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const fs = require('fs')
const path = require('path')
const pkg = require('./package.json')
const CLI = require('clui')
const Spinner = CLI.Spinner
const downloadedDir = pkg.downloadedDir
const moment = require('moment')
const crypto = require('crypto')
const exec = (cmd) => {
    clear()
    console.log(
        chalk.green(
            figlet.textSync('Manga Zource', { horizontalLayout: 'full' })
        )
    )
    console.log(
        chalk.red(`version 1.0`)
    )
    vorpal
        .command('hi', 'Usage: [OPTIONS] COMMAND')
        .action(async (args, callback) => {
            callback()
        })
    vorpal
        .command('clear', 'Clear console')
        .action(async (args, callback) => {
            clear()
            callback(
                console.log(
                    chalk.green(
                        figlet.textSync('Manga Zource', { horizontalLayout: 'full' })
                    )
                ),
                console.log(
                    chalk.red(`version 1.0`)
                )
            )
        })
    vorpal
        .delimiter('manga$')
        .show()
}
const getCurrentDirectoryBase = () => {
    return path.basename(process.cwd())
}

const directoryExists = (filePath) => {
    return fs.existsSync(filePath)
}

module.exports = {
    exec
}