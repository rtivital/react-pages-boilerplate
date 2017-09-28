/* eslint-disable no-console */
const ghPages = require('gh-pages');
const chalk = require('chalk');
const build = require('./build');
const SETTINGS = require('../settings');

const logError = (error) => console.error(chalk.red.bold`✗ Error occured while deploying to Github Pages:`, '\n', error);

build().then(() => {
  console.log(chalk.yellow`Deploying to Github Pages...`);

  ghPages.publish(SETTINGS.PUBLIC_PATH, (error) => {
    if (error) {
      logError(error);
    } else {
      console.log(chalk.green.bold`✔ Successfully deployed to Github pages!`);
    }
  });
}).catch(logError);
