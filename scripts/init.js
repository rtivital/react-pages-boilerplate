/* eslint-disable no-console */

const execute = require('child-process-promise').exec;
const chalk = require('chalk');
const argv = require('yargs').argv;

// console.log(chalk.green.bold`Initing react-pages-boilerplate`);

if (!argv.repo) {
  console.log(`
    ${chalk.red.bold`Initing react-pages-boilerplate failed: `} Missign repository link
    You should run init command with repo argumnet ${chalk.cyan.bold`npm run init -- --repo https://github.com/username/reponame`}
  `);
}

execute('echo "Hello world"')
  .catch((err) => {
    console.log(`Error occurred while running init script: ${chalk.red.bold(err)}\n`);
    process.exit(1);
  });
